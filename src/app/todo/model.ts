export class ToDoModel {
    public user: string
    public items: Array<TodoItem>
    constructor() {
        this.user = "mainUser"
        this.items = [new TodoItem("todo", false),
        new TodoItem("sidebar", false),
        new TodoItem("scpipts", false)]
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