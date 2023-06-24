import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent  implements OnInit {
  
  Id = 0;
  task:any;
  
  constructor(myRoute: ActivatedRoute, private taskService: TaskService) {
    this.Id = myRoute.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.taskService.GetTaskById(this.Id).subscribe(
      {
        next:(data)=>{
          this.task = data;
        },
        error:(err)=>{
          alert("Something went wrong");
        }
      }
    )
  }
  
}