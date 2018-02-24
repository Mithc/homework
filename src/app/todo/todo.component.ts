import { Component, OnInit } from "@angular/core"
import { ToDoModel } from "./model"

@Component({
  selector: 'app-todo',
  template: `<div class="m-t-1 m-b-1 row search-field">
      <div class="col-lg-6">
          <div class="input-group">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button">Go!</button>
      </span>
              <input type="text" class="form-control" placeholder="Search for...">
          </div>
      </div>
  </div>

  <table class="table table-striped table-bordered">
      <thead>
      <tr>
          <th>To Do</th>
          <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td>todo</td>
          <td>no</td>
      </tr>
      </tbody>
  </table>`,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public model = new ToDoModel()

  constructor() { }

  ngOnInit() {
  }

  public getUserName() {
    return this.model.user
  }

}
