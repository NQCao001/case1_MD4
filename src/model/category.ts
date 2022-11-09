import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({type:'int'})
    public id : number;
    @Column({type:'varchar'})
    public name : string
}