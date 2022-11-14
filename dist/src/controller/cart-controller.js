"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const cart_service_1 = require("../service/cart-service");
class CartController {
    constructor() {
        this.getAll = async (req, res) => {
            let cart = this.cartService.findAll();
            res.render('/product/cart', {
                listCart: cart
            });
        };
        this.cartService = new cart_service_1.CartService();
    }
}
exports.CartController = CartController;
exports.default = new CartController();
//# sourceMappingURL=cart-controller.js.map