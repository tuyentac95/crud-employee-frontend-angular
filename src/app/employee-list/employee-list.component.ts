import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  // tslint:disable-next-line:typedef
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  // tslint:disable-next-line:typedef
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  // tslint:disable-next-line:typedef
  deleteEmployee(id: number) {
    if (confirm('Are you sure')){
      this.employeeService.deleteEmployee(id).subscribe(data => {
        console.log(data);
        this.getEmployees();
      });
    }
  }
}
