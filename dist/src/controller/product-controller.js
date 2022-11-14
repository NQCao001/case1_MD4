"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
const category_service_1 = require("../service/category-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            let categories = await this.categoryService.findAll();
            res.render('product/list', { listProduct: products, Categories: categories });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await this.categoryService.findAll();
            res.render('product/create', { categories: categories });
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.showFormEdit = async (req, res) => {
            if (!isNaN(+req.params.id)) {
                let product = await this.productService.findById(req, res);
                let categories = await this.categoryService.findAll();
                res.render('product/edit', { product: product, categories: categories });
            }
        };
        this.editP = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.deleteP = async (req, res) => {
            await this.productService.deleteProduct(req, res);
        };
        this.searchP = async (req, res) => {
            let categories = await this.categoryService.findAll();
            let products = await this.productService.searchProduct(req.body.name);
            res.render('product/list', { listProduct: products, Categories: categories });
        };
        this.showProductCategory = async (req, res) => {
            let categories = await this.categoryService.findAll();
            let products = await this.productService.findProductByIdCategory(req.params.id);
            res.render('product/list', { listProduct: products, Categories: categories });
        };
        this.showCart = async (req, res) => {
            let products = await this.productService.addProduct(req, res);
            console.log(products);
            res.render('product/list', { listProduct: products });
        };
        this.productService = new product_service_1.ProductService();
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map