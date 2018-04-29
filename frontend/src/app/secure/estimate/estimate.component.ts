import { Component, OnInit } from '@angular/core';
import {DataService, EstimateProcessConfig} from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})

// Component used to create estimate requests for contractors to provide
export class EstimateComponent implements OnInit {

  // Used to store the estimateRequest contained in this component.
  estimateRequest: object = {};

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit() {

  }

  // TODO (Dario): Call ws to create estimate request.
  requestEstimate(request) {
    const estimate: EstimateProcessConfig = new EstimateProcessConfig(
      request.name,
      request.assignee,
      request.description,
      request.duedate,
      'Paul'); // TODO (DARIO): get approver id from current user.
    this.dataService.startProcessInstance(estimate).subscribe(o => {
      //go back to the dashboard
      this.router.navigate(['/securehome/dashboard/']);
    });


  }

}
