import {ProductService} from "../service/product-service";
import {Request, Response} from "express";
import {CategoryService} from "../service/category-service";

export class ProductController {
    private productService: ProductService;
    private categoryService: CategoryService;

    constructor() {
        this.productService = new ProductService();
        this.categoryService = new CategoryService();
    }

    getAll = async (req: Request, res: Response) => {
        let products = await this.productService.findAll(req, res);
        let categories = await this.categoryService.findAll();
        res.render('product/list', {listProduct: products,Categories:categories})

    }
    showFormCreate = async (req: Request, res: Response) => {
        let categories = await this.categoryService.findAll();
        res.render('product/create', {categories : categories});
    }
    createProduct=async (req: Request, res: Response) =>{
        await this.productService.saveProduct(req,res)
    }
    showFormEdit = async (req: Request, res: Response) => {
        let categories = await this.categoryService.findAll();
        res.render('product/edit',{categories : categories});
    }
}

export default new ProductController();