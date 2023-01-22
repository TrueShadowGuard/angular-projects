import {Component} from '@angular/core';
import {ITodo} from "../../models/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: ITodo[] = [];

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  removeTodo(todoToRemove: ITodo) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove);
  }

  setCompleted(todo: ITodo, completed: boolean) {
    todo.completed = completed;
  }
}
