import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { ShopComponent } from './shop/shop.component';
import {ProducrRepository} from "./shop/model/product.repository";
import {StaticData} from "./shop/model/model";
import {StoreComponent} from "./shop/store/store.component";


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LeftSidebarComponent,
    HeaderComponent,
    ShopComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [ProducrRepository, StaticData],
  bootstrap: [AppComponent]
})
export class AppModule { }
