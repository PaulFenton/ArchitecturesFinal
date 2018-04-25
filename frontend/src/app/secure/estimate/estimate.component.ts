import { Component, OnInit } from '@angular/core';
import {DataService, EstimateProcessConfig} from '../../service/data.service';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})

// Component used to create estimate requests for contractors to provide
export class EstimateComponent implements OnInit {

  // Used to store the estimateRequest contained in this component.
  estimateRequest: object = {};

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

  }

  // TODO (Dario): Call ws to create estimate request.
  requestEstimate(request) {
    console.log('create request', JSON.stringify(request));
    console.log(JSON.stringify(request));
    const estimate: EstimateProcessConfig = new EstimateProcessConfig(
      request.name,
      request.assignee,
      request.description,
      request.duedate,
      '1'); // TODO (DARIO): get approver id from current user.
    this.dataService.startProcessInstance(estimate).subscribe(o => {
      // TODO (DARIO): DO something with the response.
      console.log(JSON.stringify(o));
    });

  }

}
