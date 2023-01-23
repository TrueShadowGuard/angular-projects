import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../models/todo";
import {LocalStorageSaverService} from "../../services/local-storage-saver.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  constructor(private localStorageSaver: LocalStorageSaverService) {}

  todos: ITodo[] = [];

  ngOnInit() {
    const todos = this.localStorageSaver.get("todos");
    if(todos) {
      this.todos = JSON.parse(todos);
    }
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
    this.localStorageSaver.save("todos", JSON.stringify(this.todos));
  }

  removeTodo(todoToRemove: ITodo) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove);
    this.localStorageSaver.save("todos", JSON.stringify(this.todos));
  }

  setCompleted(todo: ITodo, completed: boolean) {
    todo.completed = completed;
    this.localStorageSaver.save("todos", JSON.stringify(this.todos));
  }
}
