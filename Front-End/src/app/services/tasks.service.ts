import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../task/task';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiUrl);
  // }

  // getTaskById(id: number): Observable<Task> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Task>(url);
  // }

  // createTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiUrl, task);
  // }

  // updateTask(id: number, task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put<Task>(url, task);
  // }

  // deleteTask(id: number): Observable<void> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<void>(url);
  // }


  GetAllTasks() {
    return this.http.get(this.apiUrl);
  }

  GetTaskById(id: any) {
    return this.http.get(this.apiUrl + "/" + id);
  }

  AddTask(newUser: any) {
    return this.http.post(this.apiUrl, newUser)
  }

  UpdateTask(id: any, UpdateUser:any) {
    return this.http.put(this.apiUrl + "/" + id, UpdateUser)
  }

  DeleteTask(id:any) {
    return this.http.delete(this.apiUrl + "/" + id);
  }
}
