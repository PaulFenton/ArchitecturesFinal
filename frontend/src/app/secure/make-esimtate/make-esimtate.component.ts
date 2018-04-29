import { Component, OnInit } from '@angular/core';
import { LineItem, EstimateProcessConfig, DataService, Task, Estimate } from '../../service/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import * as Handsontable from 'handsontable';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-make-esimtate',
  templateUrl: './make-esimtate.component.html',
  styleUrls: ['./make-esimtate.component.css']
})
export class MakeEsimtateComponent implements OnInit {
  task$: Observable<Task>;
  taskId: string;
  instance: string = 'hot';

  estimateTable: LineItem[] = [{id: 1, name: "Item name...", category: "Engineering", description: "right click to add rows...", cost: 0.0},
                                {id: 1, name: "...", category: "Labor", description: "...", cost: 0}];

  //handsontable configuration
  private headers: string[] = ['Name', 'Category', 'Description', 'Estimate'];
  private columns: any[] = [
    { data: 'name', type: 'text' },
    { data: 'category', type: 'dropdown',
      source: ['Labor', 'Skilled Trade', 'Engineering', 'Contractor', 'Consultant', 'Misc.']
    },
    {  data: 'description', type: 'text' },
    { data: 'cost', type: 'numeric' }
  ];
  private colWidths: number[] = [150, 130, 200, 100];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) 
  { 
    //this.request.name = "test request";
  }
  ngOnInit() {

    this.taskId = this.route.snapshot.params['taskId'];
    this.task$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.dataService.getTaskDetails(this.taskId);
    })
  }

  submitEstimate() {
    console.log(this.estimateTable);
    // build the estimate object
    let estimate: Estimate = {
      title: "testTitle",
      description: "test desc",
      costs: this.estimateTable,
      total: 1000.0
    }
    this.dataService.completeTask(this.taskId, estimate).subscribe(res => {
      console.log("completed task: ", res);
      //go back to the dashboard
      this.router.navigate(['/securehome/dashboard/']);
    });


  }

}
