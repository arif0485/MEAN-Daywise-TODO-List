import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment as env} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList = [];
  constructor(private http: HttpClient) {}

  getTasks(){
    let url = env.apiUrl + 'getAllTasks';
    return this.http.get(url);
  }

  updateTask(obj,id){
    let url = env.apiUrl + `updateTaskById/${id}`;
    return this.http.put(url,obj);
  }

  deleteTask(id){
    let url = env.apiUrl + `deleteTaskById/${id}`;
    return this.http.delete(url);
  }
  

  saveTask(toDoObj){
    let url = env.apiUrl + 'createTask';
    return this.http.post(url, toDoObj);
  }

}
