import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {StaticData} from "./model";
import { uniq } from "lodash"

@Injectable()
export class ProducrRepository {
    private products: Product[] = []
    private categories: string[] = []

    constructor (private dataSource: StaticData) {
        dataSource.getProduct().subscribe((data) => {
            this.products = data
            this.categories = uniq(data.map((item) => item.category))
        })
    }

    public getProductsByCategory(category: string = null): Product[] {
        return this.products.filter((item) =>category == null || category === item.category)
    }

    public getProductById(id: number) {
        return this.products.find((item) => item.id === id)
    }

    public getCategories(): string[] {
        return this.categories
    }
}