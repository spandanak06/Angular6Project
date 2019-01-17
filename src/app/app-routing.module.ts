import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { DepartmentComponent } from './department/department.component';
import { DeparmentnameComponent } from './deparmentname/deparmentname.component';

const routes: Routes = [
  {path:'result',component: ResultComponent}, {path:'department',component:DepartmentComponent}, {path:'departmentname',component:DeparmentnameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

