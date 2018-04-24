import { Component, OnInit } from '@angular/core';
import {DataService, EstimateProcessConfig, Task} from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) {
    // TODO (Dario): Use the real user id.
    this.dataService.getTasks('1').subscribe(tasks => {
      console.log(JSON.stringify(tasks));
    });
  }

  ngOnInit() {
  }

}
