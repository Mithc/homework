import {Component, HostListener, OnInit, ViewChild} from "@angular/core"
import {TodoItem, ToDoModel} from "./model"

@Component({
    selector: 'app-todo',
    template: `
        <h3 class="todo-header">ToDo list</h3>
        <div class="m-t-1 m-b-1 row search-field">
            <div class="col-lg-12">
                <div class="input-group">
                  <span class="input-group-btn">
                    <button  (click)="addItem(todoInput.value)" class="btn btn-secondary" type="button">ADD!</button>
                  </span>
                    <input #todoInput type="text" class="form-control" placeholder="Add something">
                </div>
            </div>
        </div>

        <table class="table table-dark table-hover table-striped table-bordered todo-table">
            <thead>
            <tr>
                <th>#</th>
                <th>To Do</th>
                <th>Check it</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let item of model.getTodoItems(); let i = index">
                <td>{{ i + 1 }}</td>
                <td>{{ item.action }}</td>
                <td><input type="checkbox" [(ngModel)]="item.status"></td>
                <td [ngSwitch]="item.status">
                    <span *ngSwitchCase="true"> Yes </span>
                    <span *ngSwitchDefault> No </span>
                </td>
            </tr>
            </tbody>
        </table>`
})
export class TodoComponent {
    @ViewChild("todoInput") private todoInput
    public model = new ToDoModel()

    @HostListener("keydown", ["$event"])
    public onKeydown(event: KeyboardEvent) {
        if (event.code === "Enter") {
            this.addItem(this.todoInput.nativeElement.value)
        }
    }

    public addItem(item): void {
        if (item !== "") {
            this.model.items.push(new TodoItem(item, false))
            this.todoInput.nativeElement.value = ""
        }
    }
}

