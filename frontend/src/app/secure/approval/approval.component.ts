import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DataService, Task } from '../../service/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  
  task$: Observable<Task>;
  taskId: string;
  instance: string = 'hot';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) 
  { 
    //this.request.name = "test request";
  }

  ngOnInit() {

    this.task$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.taskId = params.get('taskId');
        return this.dataService.getTaskDetails(this.taskId);
      })
        
  }

}
