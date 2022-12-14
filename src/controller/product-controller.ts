import {ProductService} from "../service/product-service";
import {Request, Response} from "express";
import {CategoryService} from "../service/category-service";
import {CartService} from "../service/cart-service";

export class ProductController {
    private productService: ProductService;
    private categoryService: CategoryService;
    private cartService: CartService;

    constructor() {
        this.productService = new ProductService();
        this.categoryService = new CategoryService();
    }

    getAll = async (req: Request, res: Response) => {
        let products = await this.productService.findAll(req, res);
        let categories = await this.categoryService.findAll();
        res.render('product/list', {listProduct: products, Categories: categories})

    }
    showFormCreate = async (req: Request, res: Response) => {
        let categories = await this.categoryService.findAll();
        res.render('product/create', {categories: categories});
    }
    createProduct = async (req: Request, res: Response) => {
        await this.productService.saveProduct(req, res)
    }
    showFormEdit = async (req: Request, res: Response) => {
        if (!isNaN(+req.params.id)) {
            let product = await this.productService.findById(req,res);
            let categories = await this.categoryService.findAll();
            res.render('product/edit', {product: product, categories: categories});
        }
    }
    editP = async (req: Request, res: Response) => {
        await this.productService.editProduct(req, res)
    }
    deleteP=async (req: Request, res: Response) => {
        await this.productService.deleteProduct(req, res)
    }
    searchP = async (req: Request, res: Response) => {
        let categories = await this.categoryService.findAll();
        let products=await this.productService.searchProduct(req.body.name)
        res.render('product/list', {listProduct: products, Categories: categories})
    }
    showProductCategory = async (req: Request, res: Response) => {
        let categories = await this.categoryService.findAll();
        let products=await this.productService.findProductByIdCategory(req.params.id)
        res.render('product/list', {listProduct: products, Categories: categories})
    }
    showCart = async (req: Request, res: Response)=>{
        let products=await this.productService.addProduct(req,res)
        console.log(products)
        res.render('product/list', {listProduct: products})
    }
}

export default new ProductController();