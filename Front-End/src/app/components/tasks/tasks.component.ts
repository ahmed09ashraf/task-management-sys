import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent {
  tasks: any;
  errMsg: any;
  
  constructor(private taskService: TaskService, private router: Router) {
    taskService.GetAllTasks().subscribe(
      {
        next: (data) => {
          this.tasks = data;
        },
        error: (err) => {
          alert(`Something went wrong ${err}`);
        }
      }
    )
  };

  delete(id: any) {
    let text = `Are You Sure ? Delete Task #${id}`;
    if(confirm(text) == true) {
      this.taskService.DeleteTask(id).subscribe({
        error: (err) => { this.errMsg = err.message },
        complete: () => {
          this.taskService.GetAllTasks().subscribe({
            next: (data) => {this.tasks = data;},
            error: (err) => {alert(`Something went wrong ${err}`);}
          })}
      });
    }
  }
}
