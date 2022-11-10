"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            let products = await this.productRepository.find();
            return products;
        };
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let product = req.body;
                let image = files.file;
                await image.mv('./public/IMG/' + image.name);
                product.image = 'IMG/' + image.name;
                await this.productRepository.save(product);
                res.redirect(301, '/product');
            }
        };
        this.findById = async (req, res) => {
            let id = +req.params.id;
            return await this.productRepository.findOneBy({ id: id });
        };
        this.editProduct = async (req, res) => {
            let files = req.files;
            let id = +req.params.id;
            if (files != null) {
                let product = req.body;
                let image = files.file;
                await image.mv('./public/IMG/' + image.name);
                product.image = 'IMG/' + image.name;
                await this.productRepository.update({ id: id }, product);
                res.redirect(301, '/product');
            }
        };
        this.deleteProduct = async (req, res) => {
            let id = +req.params.id;
            let product = await this.productRepository.findOneBy({ id: id });
            if (product) {
                await this.productRepository.delete({ id: id });
                res.redirect(301, '/product');
            }
            else { }
        };
        this.searchProduct = async (key) => {
            return await this.productRepository.query(`select * from product where name like '%${key}%'`);
        };
        this.findProductByIdCategory = async (id) => {
            return await this.productRepository.query(`select *from product where idCategoryId='${id}'`);
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('Connect success Data product!!!');
            this.productRepository = await connection.getRepository(product_1.Product);
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map