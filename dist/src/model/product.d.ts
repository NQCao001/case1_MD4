import { Category } from "./category";
export declare class Product {
    readonly id: number;
    name: string;
    idCategory: Category;
    price: number;
    quantity: number;
    description: string;
    image: string;
}
