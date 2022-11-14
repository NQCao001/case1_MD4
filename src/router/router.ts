import {Router} from "express";
import {routerProduct} from "./product-router";
import {routerCategory} from "./category-router";
import {routerCart} from "./cart-router";
export const router= Router();
router.use('',routerProduct);
router.use('',routerCategory);
router.use('',routerCart);
