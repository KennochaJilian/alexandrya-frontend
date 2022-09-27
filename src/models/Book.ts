import type { Author } from "./Author";
import type { Category } from "./Category";

export class Book {
    title:string; 
    nb_pages:number; 
    summary:string; 
    publication_date:Date; 
    cover?:string;
    path:string; 
    authors:Author[];
    categories: Category[]


}