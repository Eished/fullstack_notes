import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MessageModel } from '../model/Message'

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {
  constructor(private http: HttpClient) {}
  executeHelloWorldService() {
    return this.http.get<MessageModel>('http://localhost:8080/hello-world/api/v1/greeting')
  }
}
