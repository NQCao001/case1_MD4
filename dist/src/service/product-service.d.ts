import { Request, Response } from "express";
export declare class ProductService {
    private productRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<any>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    searchProduct: (key: any) => Promise<any>;
    findProductByIdCategory: (id: any) => Promise<any>;
    addProduct: (req: Request, res: Response) => Promise<void>;
}
