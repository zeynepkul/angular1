import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{
    let newPath = this.apiUrl + "todos"
    return this.httpClient.get<Todo[]>(newPath);
  }

  getTodosByCategory(userId:number):Observable<Todo[]>{
    let newPath = this.apiUrl + "todos?userId=" + userId
    return this.httpClient.get<Todo[]>(newPath);
  }

  add(product:Todo):Observable<Todo>{
    return this.httpClient.post<Todo>(this.apiUrl + 'todos/add',product)
  }
}
