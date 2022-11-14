"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_router_1 = require("./product-router");
const category_router_1 = require("./category-router");
const cart_router_1 = require("./cart-router");
exports.router = (0, express_1.Router)();
exports.router.use('', product_router_1.routerProduct);
exports.router.use('', category_router_1.routerCategory);
exports.router.use('', cart_router_1.routerCart);
//# sourceMappingURL=router.js.map