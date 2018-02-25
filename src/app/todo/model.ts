export class ToDoModel {
    public user: string
    public items: Array<TodoItem>
    constructor() {
        this.user = "mainUser"
        this.items = [new TodoItem("todo", true),
        new TodoItem("sidebar", false),
        new TodoItem("scpipts", false)]
    }

    public getUserName() {
        return this.user
    }

    public getTodoItems() {
        return this.items
    }
}

export class TodoItem {
    public action: string
    public status: boolean

    constructor(action, status) {
        this.action = action
        this.status = status
    }
}