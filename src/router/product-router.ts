import {Router} from "express";
import productController from "../controller/product-controller";
export const routerProduct= Router();
routerProduct.get('/product',productController.getAll);
routerProduct.get('/create',productController.showFormCreate);
routerProduct.post('/create',productController.createProduct);
routerProduct.get('/edit/:id',productController.showFormEdit)