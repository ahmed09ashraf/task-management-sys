import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import { AuthGuard } from './services/auth.guard';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  // {path:'login', component:LoginComponent},
  // {path:'register', component:RegisterComponent},
  // {path:'', component: HomeComponent/*,canActivate:[AuthGuard]*/},
  { path: '', component: TasksComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'tasks/update/:id', component: UpdateTaskComponent},
  { path: 'add', component: AddTaskComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
