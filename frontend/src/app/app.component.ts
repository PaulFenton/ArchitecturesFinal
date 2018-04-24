import { Component, ViewChild } from '@angular/core';
import { DataService, Task } from './data.service';
import { Observable } from 'rxjs/Observable';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Observable<Task[]>;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private dataService: DataService, private router: Router) {

  }

  selectDashboard() {
    this.router.navigate(['/dashboard']);
  }

  selectNewTask() {
    this.router.navigate(['/estimate']);
  }

  selectLogout() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}
