import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
 

  constructor(private r:Router) { }
    depname(){
    this.r.navigate(['departmentname']);
  
   }

  ngOnInit() {
  }

}
