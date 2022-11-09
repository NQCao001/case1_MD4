import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";

@Entity()
export class Product{
    @PrimaryGeneratedColumn({type:'int'})
    public readonly id : number;
    @Column({type:'varchar'})
    public name : string;
    @ManyToOne(() => Category)
    public idCategory: Category;
    @Column({type:'double'})
    public price : number;
    @Column({type:'int'})
    public quantity : number;
    @Column({type:'varchar'} )
    public description : string;
    @Column({type:'text'} )
    public image : string;
}