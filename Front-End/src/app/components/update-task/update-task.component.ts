import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  task: any;
  Id = 0;
  formSubmitted = false;

  constructor(myRoute: ActivatedRoute, private taskService: TaskService) {
    this.Id = myRoute.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.taskService.GetTaskById(this.Id).subscribe(
      {
        next: (data) => {
          this.task = data;
        },
        error: (err) => {
          alert("Something went wrong");
        }
      }
    )
  }
  update(title: any, period: any, status: any) {
    let updateTask = { title, period, status};
    this.taskService.UpdateTask(this.Id, updateTask).subscribe();
    this.formSubmitted = true;
  }
}
