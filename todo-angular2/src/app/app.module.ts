import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TaskComponent } from './todo/task.component';
import { FocusDirective } from './directive/focus.directive';
import { SearchComponent } from './search/search.component';
import {InMemoryTodoService} from './service/in-memory-todo.service';
import {LocalStorageTodoService} from './service/local-storage-todo.service';
import {DndModule} from 'ng2-dnd';
import {TodoRestService} from './service/todo-rest.service';

const routes = [
  {path: '', component: TodoComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskComponent,
    FocusDirective,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    DndModule.forRoot()
  ],
  providers: [LocalStorageTodoService, TodoRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
