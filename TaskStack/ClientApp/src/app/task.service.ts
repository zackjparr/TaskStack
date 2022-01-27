import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url:string = "Task";
  constructor(private http: HttpClient,  @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl + this.url;
   }

  //this is a function
  GetTaskList(): Observable<any>{
   return this.http.get(this.url);
  }

  GetTask(id : number) {
    return this.http.get(this.url + "/get/" + id);
  }

  CreateTask(t:Task){
    //console.log(this.url + "makeNew/")
    console.log(t);
    return this.http.post(this.url + "/makeNew/", t);
  }

  DeleteTask(id:number){
    return this.http.delete(this.url + "/delete/" + id);
  }

  UpdateTask(newTask:Task, id:number){
    return this.http.put(this.url + "/update-task/" + id, newTask);
  }
}