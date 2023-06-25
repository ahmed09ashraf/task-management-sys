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
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', component: TasksComponent,canActivate:[AuthGuard]},
  { path: 'tasks', component: TasksComponent ,canActivate:[AuthGuard]},
  { path: 'tasks/:id', component: TaskDetailsComponent ,canActivate:[AuthGuard]},
  { path: 'tasks/update/:id', component: UpdateTaskComponent ,canActivate:[AuthGuard]},
  { path: 'add', component: AddTaskComponent ,canActivate:[AuthGuard]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
