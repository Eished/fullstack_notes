import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {TodoRestService} from '../service/todo-rest.service';
import {Task} from '../model/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: []
})
export class TodoComponent implements OnInit {
  tasks: Task[];
  form: FormGroup;
  isSubmitted = false;

  constructor(private todoService: TodoRestService, fb: FormBuilder) {
    this.form = fb.group({
      newTask: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.todoService.getAll().then(tasks => {
      this.tasks = tasks;
    });
  }

  onSubmit({value, valid}: {value: FormGroup, valid: boolean}) {
    console.log('on submit called ' + this.form.get('newTask').value);
    console.log('on submit called ' + valid);
    this.isSubmitted = true;

    if (!valid) {
      return;
    }

    this.todoService.add(this.form.get('newTask').value)
    .then(task => {
      console.log("Received add response");
      console.log(task);
      return this.todoService.getAll();
    }).then(tasks => {
      this.tasks = tasks;
      this.form.setValue({
        newTask: ''
      });
      this.form.reset();
      this.isSubmitted = false;
      console.log(this.tasks);
    });

  }

  onNotify(message: string) {
    console.log('On notify called of todo component: ' + message);
    this.todoService.getAll().then(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }
}
