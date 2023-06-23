import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/tasks.service';
import { Task } from '../../task/task';
      
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
      
  tasks: Task[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public taskService: TaskService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.taskService.getAll().subscribe((data: Task[])=>{
      this.tasks = data;
      console.log(this.tasks);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  // deletePost(id:number){
  //   this.taskService.delete(id).subscribe(res => {
  //        this.tasks = this.tasks.filter(item => item.id !== id);
  //        console.log('Task deleted successfully!');
  //   })
  // }
    
}