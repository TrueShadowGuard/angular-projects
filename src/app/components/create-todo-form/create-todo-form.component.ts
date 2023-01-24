import {Component, EventEmitter, Output} from '@angular/core';
import {ITodo} from "../../models/todo";
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.scss']
})
export class CreateTodoFormComponent {
  @Output()
  submitTodo = new EventEmitter<ITodo>();

  createTodoForm = new FormGroup({
    titleControl: new FormControl("", [Validators.required, Validators.minLength(6)]),
    descriptionControl: new FormControl(""),
    dateControl: new FormControl(new Date(), Validators.required),
  });

  initialValues = this.createTodoForm.value;

  onSubmit(e: SubmitEvent, formGroupDirective: FormGroupDirective) {
    e.preventDefault();
    if(this.createTodoForm.invalid) return;

    const target = e.target as any;
    const todo = {
      title: target.elements.title.value,
      description: target.elements.description.value,
      endDate: target.elements.endDate.value,
      completed: false
    } as ITodo;
    this.createTodoForm.reset(this.initialValues);
    formGroupDirective.resetForm(this.initialValues);
    this.submitTodo.emit(todo);
  }

  ngOnInit() {
    //@ts-ignore
    window.c = this.createTodoForm;
    this.createTodoForm.statusChanges.subscribe(() => console.log(this.createTodoForm.errors))
  }

  get form(): { [key: string]: AbstractControl; } {
    return this.createTodoForm.controls;
  }
}
