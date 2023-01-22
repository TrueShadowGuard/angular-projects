import {Component, EventEmitter, Output} from '@angular/core';
import {ITodo} from "../../models/todo";

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.scss']
})
export class CreateTodoFormComponent {
  @Output()
  submitTodo = new EventEmitter<ITodo>();

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    const target = e.target as any;
    const todo = {
      title: target.elements.title.value,
      description: target.elements.description.value,
      endDate: target.elements.endDate.value,
      completed: false
    } as ITodo;
    this.submitTodo.emit(todo);
  }
}
