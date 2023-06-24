// import { Component, OnInit } from '@angular/core';
// import { TaskService } from '../../services/tasks.service';
// import { Task } from '../../task/task';
      
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   tasks: Task[] | any;

//   constructor(private taskService: TaskService) { }

//   ngOnInit(): void {
//     this.getTasks();
//   }

//   getTasks(): void {
//     this.taskService.getTasks()
//       .subscribe({
//         next: val => {
//           this.tasks = val;
//           console.log(val);
//         },
//         error: err => console.log(err)
//       });
//   }
// }
