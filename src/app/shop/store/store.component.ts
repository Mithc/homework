import {Component} from "@angular/core";
import {ProducrRepository} from "../model/product.repository";
import {Product} from "../model/product.model";

@Component({
    selector: "store",
    template: `
        <h3>Магазин Подарков</h3>
        <div class="container">
            <!--<div class="categories"> <h4>{{categories.length}} Categories</h4></div>-->
            <!--<div class="products"><h4>{{products.length}} Products</h4></div>-->
            <div class="category">
                <button class="btn btn-block btn-outline-primary" (click)="changeCategory(); selectedCategory = null"
                        [class.active]="selectedCategory === null">Все категории
                </button>
                <button *ngFor="let cat of categories" class="btn btn-block btn-outline-primary"
                        [class.active]="cat === selectedCategory"
                        (click)="changeCategory(cat)">{{cat}}
                </button>
            </div>
            <div class="products">
                <div *ngFor="let product of products" class="card card-outline-primary">
                    <h4 class="card-header">{{product.name}}
                        <span class="tag"> {{product.price | currency: "RUB":true:"2.2-2"}}</span>
                    </h4>
                    <div class="card-text p-a-1">{{product.description}}</div>
                </div>
            </div>
        </div>`
})
export class StoreComponent {
    public selectedCategory = null

    constructor(private repo: ProducrRepository) {
    }

    get products(): Product[] {
        return this.repo.getProductsByCategory(this.selectedCategory);
    }

    get categories(): string[] {
        return this.repo.getCategories()
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory
    }
}