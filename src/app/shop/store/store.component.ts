import {Component} from "@angular/core";
import {ProducrRepository} from "../model/product.repository";
import {Product} from "../model/product.model";

@Component({
    selector: "store",
    template: `
        <div class="container">
            <div class="categories"> {{categories.length}} Categories</div>
            <div class="products">{{products.length}} Products</div>
        </div>`
})
export class StoreComponent {
    constructor(private repo: ProducrRepository) {
    }

    get products(): Product[] {
        return this.repo.getProductsByCategory();
    }

    get categories(): string[] {
        console.log(this.repo.getCategories())
        return this.repo.getCategories()
    }
}