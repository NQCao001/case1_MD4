import {AppDataSource} from "../data source";
import {Cart} from "../model/cart";

export class CartService{
    private CartRepository : any;
    constructor() {
        AppDataSource.initialize().then(async connection=>{
            console.log('Connect success Data Cart!!!')
            this.CartRepository=await connection.getRepository(Cart);
        })
    }
    findAll= async ()=>{
        let cart = await this.CartRepository.find();
        return cart;
    }
}