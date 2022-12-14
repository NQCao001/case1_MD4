"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProduct = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product-controller"));
exports.routerProduct = (0, express_1.Router)();
exports.routerProduct.get('/product', product_controller_1.default.getAll);
exports.routerProduct.get('/create', product_controller_1.default.showFormCreate);
exports.routerProduct.post('/create', product_controller_1.default.createProduct);
exports.routerProduct.get('/edit/:id', product_controller_1.default.showFormEdit);
exports.routerProduct.post('/edit/:id', product_controller_1.default.editP);
exports.routerProduct.get('/delete/:id', product_controller_1.default.deleteP);
exports.routerProduct.post('/product', product_controller_1.default.searchP);
exports.routerProduct.get('/category/:id', product_controller_1.default.showProductCategory);
exports.routerProduct.post('/addCart/:id', product_controller_1.default.showCart);
//# sourceMappingURL=product-router.js.map