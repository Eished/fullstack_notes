import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Task} from '../model/task';
import {LocalStorageTodoService} from '../service/local-storage-todo.service';
import {TodoRestService} from '../service/todo-rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: []
})
export class SearchComponent implements OnInit {
  query: string;
  searchRes: Task[];

  constructor(private todoService: TodoRestService) { }

  ngOnInit() {

  }

  searchTask() {
      this.todoService.getAll()
      .then(tasks => {
        this.searchRes = tasks.filter(task => task.name.indexOf(this.query) >= 0);
      });
  }

  onSubmit() {
    this.todoService.getAll()
    .then(tasks => {
      this.searchRes = tasks.filter(task => task.name.indexOf(this.query) >= 0);
    });
  }

  onNotify(message: string) {
    console.log('On notify called of search component: ' + message);
    this.todoService.getAll().then(tasks => {
      this.searchRes = tasks;
    });
  }

}
