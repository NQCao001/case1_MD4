import {AppDataSource} from "../data source";
import {Category} from "../model/category";

export class CategoryService{
    private CategoryRepository : any;
    constructor() {
        AppDataSource.initialize().then(async connection=>{
            console.log('Connect success Data Category!!!')
            this.CategoryRepository=await connection.getRepository(Category);
        })
    }
    findAll= async ()=>{
        let category = await this.CategoryRepository.find();
        return category;
    }
}