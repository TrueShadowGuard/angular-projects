import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodo} from "../../models/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Output()
  todoCompletedChanged = new EventEmitter<boolean>();

  @Output()
  remove = new EventEmitter<void>();

  @Input()
  todo!: ITodo
}
