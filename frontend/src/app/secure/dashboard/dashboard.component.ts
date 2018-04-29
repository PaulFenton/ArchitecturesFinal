import { Component, OnInit } from '@angular/core';
import {DataService, EstimateProcessConfig, Task} from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})




export class DashboardComponent implements OnInit {

  displayedColumns = ['id', 'name', 'description', 'dueDate', 'assignedTo'];
  dataSource: Task[];
  selection: Task;



  constructor(private router: Router, private dataService: DataService) {
    this.selection = new Task("","","","","");
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit() {
    this.dataService.getAllTasks().subscribe(tasks => {
      this.dataSource = tasks;
    });
  }

  select(element: Task) {
    this.selection = element;
  }
  taskAction() {
    //send the user to the task view based on the task type
    switch(this.selection.name) {
      case "Make Estimate":
        this.router.navigate(['/securehome/makeEstimate/' + this.selection.id]);
        break;
      case "Approve Estimate":
        this.router.navigate(['/securehome/approve/' + this.selection.id]);
        break;
      case "Review Feedback":
        this.router.navigate(['/securehome/review/' + this.selection.id]);
        break;
      default:
        break;
    }
    
  }
  addNewTask() {
    this.router.navigate(['/securehome/estimate']);
  }
}

/*export interface Element {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  assignedTo: string;
}*/