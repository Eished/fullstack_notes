import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Task} from '../model/task';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoRestService {
  id: number;
  url: "http://localhost:8090/rest/api/todos/";

  constructor(private http: Http) { }

  getAll(): Promise<Task[]> {
     return this.http.get("http://localhost:8090/rest/api/todos/")
       .toPromise()
       .then(response => response.json())
       .catch(this.handleError);
  }

 add(name: string): Promise<Task> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post("http://localhost:8090/rest/api/todos/", new Task(null, name, false), options)
            .toPromise()
            .then(response => response.json() as Task)
            .catch(this.handleError);
 }

 updateDone(id: string, isDone: boolean): Promise<void> {

   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

  return this.http.put("http://localhost:8090/rest/api/todos/"+ id, {isDone: isDone}, options )
             .toPromise()
             .then(response => response.json() as Task)
             .then(response => Promise.resolve())
             .catch(this.handleError);
 }


 delete(id: string): Promise<void> {

   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

   return this.http.delete("http://localhost:8090/rest/api/todos/"+ id, options )
             .toPromise()
             .then(response => Promise.resolve())
             .catch(this.handleError);
 }


 update(task: Task): Promise<void> {

   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

  return this.http.put("http://localhost:8090/rest/api/todos/"+ task.id, {name: task.getName()}, options )
             .toPromise()
             .then(response => response.json() as Task)
             .then(response => Promise.resolve())
             .catch(this.handleError);
 }


  handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
  }



}
