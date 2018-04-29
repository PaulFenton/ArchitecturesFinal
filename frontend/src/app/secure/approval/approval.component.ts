import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService, Task, Estimate, LineItem } from '../../service/data.service';
import { Observable } from 'rxjs/Observable';

export class Approval {
  constructor(
    public approved: Boolean,
    public estimate: Estimate
  ) { }
}


@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  
  estimate$: Observable<Estimate>;
  taskId: string;
  instance: string = 'hot';
  title: string;
  description: string;
  total: Number;

  estimateTable: LineItem[] = [{id: 1, name: "Item name...", category: "Engineering", description: "right click to add rows...", cost: 0.0},
  {id: 1, name: "...", category: "Labor", description: "...", cost: 0.0}];

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
    this.estimate$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.dataService.getEstimate(this.taskId);
    });

    this.estimate$.subscribe(estimates => {
      this.title = estimates.title;
      this.description = estimates.description;
      this.estimateTable = estimates.costs;
      this.total = estimates.total;
      return;
    });
        
  }

  approveEstimate() {
    // build the estimate object
    let estimate: Estimate = {
      title: this.title,
      description: this.description,
      costs: this.estimateTable,
      total: this.total
    }
    let approved: Approval = {
      approved: true,
      estimate: estimate
    }
    this.dataService.completeTask(this.taskId, approved).subscribe(res => {
      //go back to the dashboard
      this.router.navigate(['/securehome/dashboard/']);
    });
  }
  rejectEstimate() {
    // build the estimate object
    let estimate: Estimate = {
      title: this.title,
      description: this.description,
      costs: this.estimateTable,
      total: this.total
    }
    let approved: Approval = {
      approved: false,//reject the estimate
      estimate: estimate
    }
    this.dataService.completeTask(this.taskId, approved).subscribe(res => {
      //go back to the dashboard
      this.router.navigate(['/securehome/dashboard/']);
    });
  }

}
