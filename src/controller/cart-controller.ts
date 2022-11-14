import {Request, Response} from "express";
import {CartService} from "../service/cart-service";

export class CartController{
    private cartService:CartService
    constructor() {
        this.cartService = new CartService();
    }
    getAll=async (req:Request,res:Response)=>{
        let cart =this.cartService.findAll();
        res.render('/product/cart',{
            listCart: cart
        })
    }
}
export default new CartController();