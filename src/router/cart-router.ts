import {Router} from "express";
import cartController from "../controller/cart-controller";
export const routerCart= Router();
routerCart.get('/cart',cartController.getAll);