import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn({type:"int"})
    public stt:number
    @Column({type:'varchar'})
    public name : string
    @Column({type:'int'})
    public quantity : number
}