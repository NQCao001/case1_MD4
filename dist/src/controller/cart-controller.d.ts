import { Request, Response } from "express";
export declare class CartController {
    private cartService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CartController;
export default _default;
