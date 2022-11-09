import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type:'mysql',
    host:'localhost',
    port:3306,
    database:'demo_database',
    username:'root',
    password:'12345678',
    synchronize:true,
    entities:['dist/src/model/*.js']
});