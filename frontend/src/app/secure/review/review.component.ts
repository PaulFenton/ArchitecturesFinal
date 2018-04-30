import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { DataService, LineItem, Estimate } from '../../service/data.service';
import { Observable } from 'rxjs/Observable';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  estimate$: Observable<Estimate>;
  taskId: string;
  instance: string = 'hot';
  title: string;
  description: string;
  total: Number;

  estimateTable: LineItem[] = [{id: 1, name: "Item name...", category: "Engineering", description: "right click to add rows...", cost: 0.0},
  {id: 1, name: "...", category: "Labor", description: "...", cost: 0.0}];

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

  }
  ngOnInit() {
    this.taskId = this.route.snapshot.params['taskId'];
    this.estimate$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.dataService.getReview(this.taskId);
    });

    this.estimate$.subscribe(estimates => {
      this.title = estimates.title;
      this.description = estimates.description;
      this.estimateTable = estimates.costs;
      this.total = estimates.total;
      this.updateTotal();
      return;
    });
  }

  private updateTotal() {
    this.total = this.estimateTable.reduce((total, amount) => total + amount.cost, 0);
  }

  resubmitEstimate() {
    // build the estimate object
    let estimate: Estimate = {
      title: this.title,
      description: this.description,
      costs: this.estimateTable,
      total: this.total
    }
    this.dataService.completeTask(this.taskId, estimate).subscribe(res => {
      //go back to the dashboard
      this.router.navigate(['/securehome/dashboard/']);
    });
  }

}
