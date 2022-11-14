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
            let image = files.file as UploadedFile;
            await image.mv('./public/IMG/'+image.name);
            product.image='/IMG/'+image.name;
            await this.productRepository.save(product);
            res.redirect(301,'/product');
        }
    }
    findById = async (req:Request,res:Response)=>{
        let id = +req.params.id
        return await this.productRepository.findOneBy({id:id})
    }
    editProduct =  async (req: Request, res: Response) => {
        let files=req.files
        let id = +req.params.id
        if(files!=null){
            let product=req.body
            let image = files.file as UploadedFile;
            await image.mv('./public/IMG/'+image.name);
            product.image='/IMG/'+image.name;
            await this.productRepository.update({id: id},product);
            res.redirect(301,'/product');
        }
    }
    deleteProduct = async (req: Request, res: Response) => {
        let id = +req.params.id
        let product = await this.productRepository.findOneBy({id:id})
        if(product){
            await this.productRepository.delete({id: id});
            res.redirect(301,'/product');
        }else {}
    }
    searchProduct= async (key)=>{
        return await this.productRepository.query(`select * from product where name like '%${key}%'`)
    }
    findProductByIdCategory = async (id) => {
        return await this.productRepository.query(`select * from product where idCategoryId='${id}'`)
    }
    addProduct = async (req: Request, res: Response)=>{
        let id = +req.params.id
        console.log(id)
        let product = await this.productRepository.findOneBy({id:id})
        console.log(product)
        // return await this.productRepository.query(`insert into cart(name,quantity) values()`)
    }
}
