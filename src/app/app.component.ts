import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
  <div class="container">
      <div *ngIf="!options" class="row">
          <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
              <app-left-sidebar></app-left-sidebar>
          </div>
          <div class="col-12 col-md-9 col-xl-10">
              <app-todo></app-todo>
          </div>
      </div>
      <div *ngIf="options" class="row">
          <div class="col-12">
              <app-shop></app-shop>
          </div>
      </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public options = true;
}
