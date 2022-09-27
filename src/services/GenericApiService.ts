import axios from 'axios-observable';
import type { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class GenericApiObservableService<T>{
  protected axios = axios;

  constructor(protected baseUrl: string) {
  }
  
  abstract defaultMapper: (baseData: any) => any;

  isValidDate(d: Date) {
    return d instanceof Date && !isNaN(d.getTime());
  }

  listAutoMap<T2>(type: (new () => T2), list: any[]): any {
    if (!list) return;
    return list.map(x => this.autoMap(type, x));
  }

  autoMap<T2>(type: (new () => T2), json: any): any {
    let t = new type();
    Object.keys(json).forEach(el => {
      let newValue = json[el];
      if (newValue && (!Array.isArray(newValue) || newValue.length > 0) || newValue === 0) {
        t[el] = newValue;
      }
    });
    return t;
  }

  listBase(url: any, pagination: any, filters: any, sorter: any) {
    return axios.get(url, {
      params: {
        ...filters,
        ...(sorter?.columnKey ? { ordering: (sorter.order === 'descend' ? '-' : '') + sorter.columnKey } : null),
        ...(pagination?.pageSize ? { limit: pagination.pageSize } : null),
        ...(pagination?.current && pagination?.pageSize ? { offset: (pagination.current - 1) * pagination.pageSize } : null)
      }
    })
      .pipe(map(r => r.data), map(data => {
        data.results = data.results.map((result:any) => {
            return this.defaultMapper(result);
        });
        return data;
      }));
  }

  read(id: string): Observable<any> {
    return axios.get(`${this.baseUrl}/${id}/`).pipe(map(r => r.data));
  }

  get<T>(id: string): Observable<T> {
    return axios.get(`${this.baseUrl}/${id}/`).pipe(map(r => r.data), map(x => this.defaultMapper(x)));
  }

  list(pagination: any = null, filters: any = null, sorter: any = null): Observable<T[]> {
    return this.listBase(`${this.baseUrl}/`, pagination, filters, sorter);
  }

  listForApi: (...args) => Observable<T[]> = (pagination, filters, sorter) => {
    return this.list(pagination, filters, sorter);
  }

  listForApiV2: (...args) => Observable<T[]> = (...args) => {
    return this.list(...args);
  }

  create(data: any): Observable<any> {
    return axios.post(`${this.baseUrl}/`, data).pipe(map(r => r.data));
  }

  update(id: string, data: any): Observable<any> {
    return axios.patch(`${this.baseUrl}/${id}/`, data).pipe(map(r => r.data));
  }

  delete(id: string): Observable<any> {
    return axios.delete(`${this.baseUrl}/${id}`).pipe(map(r => {
      return r.data
    }));
  }
}