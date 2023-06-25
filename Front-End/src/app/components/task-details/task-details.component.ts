import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/tasks.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent  implements OnInit {
  
  id = 0;
  task:any;
  // userId : any ;
  
  constructor(myRoute: ActivatedRoute, private taskService: TaskService) {
    this.id = myRoute.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.taskService.GetTaskById(this.id).subscribe(
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