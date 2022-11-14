"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCart = void 0;
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../controller/cart-controller"));
exports.routerCart = (0, express_1.Router)();
exports.routerCart.get('/cart', cart_controller_1.default.getAll);
//# sourceMappingURL=cart-router.js.map