"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const data_source_1 = require("../data source");
const cart_1 = require("../model/cart");
class CartService {
    constructor() {
        this.findAll = async () => {
            let cart = await this.CartRepository.find();
            return cart;
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('Connect success Data Cart!!!');
            this.CartRepository = await connection.getRepository(cart_1.Cart);
        });
    }
}
exports.CartService = CartService;
//# sourceMappingURL=cart-service.js.map