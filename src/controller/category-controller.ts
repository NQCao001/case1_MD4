import {Request, Response} from "express";
import {CategoryService} from "../service/category-service";

export class CategoryController{
    private categoryService:CategoryService
    constructor() {
        this.categoryService = new CategoryService();
    }
    getAll=async (req:Request,res:Response)=>{
        let category =this.categoryService.findAll();
        res.render('/product/list',{
            listCategory: category
        })
    }
}
export default new CategoryController();