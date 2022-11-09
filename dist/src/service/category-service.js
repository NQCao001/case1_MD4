"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.findAll = async () => {
            let category = await this.CategoryRepository.find();
            return category;
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('Connect success Data Category!!!');
            this.CategoryRepository = await connection.getRepository(category_1.Category);
        });
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category-service.js.map