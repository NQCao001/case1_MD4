import {AppDataSource} from "../data source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";

export class ProductService {
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('Connect success Data product!!!')
            this.productRepository = await connection.getRepository(Product);
        })
    }

    findAll = async (req: Request, res: Response) => {
        let products = await this.productRepository.find();
        return products
    }
    saveProduct = async (req: Request, res: Response) => {
        let files=req.files
        if(files!=null){
            let product=req.body
            console.log(product)
            let image = files.file as UploadedFile;
            await image.mv('./public/IMG/'+image.name);
            product.image='IMG/'+image.name;
            await this.productRepository.save(product);
            res.redirect(301,'/product');
        }

    }
}
