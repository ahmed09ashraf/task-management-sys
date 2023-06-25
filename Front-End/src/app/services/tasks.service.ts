import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  GetAllTasks() {
    return this.http.get(this.apiUrl);
  }

  GetTaskById(id: any) {
    return this.http.get(this.apiUrl + "/" + id);
  }

  AddTask(newTask: any) {
    return this.http.post(this.apiUrl, newTask)
  }

  UpdateTask(id: any, UpdateUser:any) {
    return this.http.put(this.apiUrl + "/" + id, UpdateUser)
  }

  DeleteTask(id:any) {
    return this.http.delete(this.apiUrl + "/" + id);
  }
}
