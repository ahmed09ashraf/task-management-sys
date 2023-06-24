import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  formSubmitted = false;

  constructor(private taskService:TaskService) {}
  Add(title:any, period:any, status:any){
    let newTask = {title, period, status};
    this.taskService.AddTask(newTask).subscribe();
    this.formSubmitted = true;
  }
}
