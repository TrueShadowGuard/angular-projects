import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodo} from "../../models/todo";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Output()
  completedChange = new EventEmitter<boolean>();

  @Output()
  remove = new EventEmitter<void>();

  @Input()
  todo!: ITodo

  onCompletedChange(e: MatCheckboxChange) {
    this.completedChange.emit(e.checked);
  }
}
