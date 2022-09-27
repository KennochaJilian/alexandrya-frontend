import { Book } from "@/models/Book";
import { GenericApiObservableService } from "./GenericApiService";

export class BookApiService extends GenericApiObservableService<Book>{

    constructor(){
        super('books')
    }
    
    defaultMapper = (baseData: any) => this.autoMap(Book, baseData);
}