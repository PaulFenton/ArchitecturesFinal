import { Component } from '@angular/core';
import { DataService, Task } from './data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tasks: Observable<Task[]>;
  
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.tasks = this.dataService.getTasks();

    this.tasks.subscribe(tasks => console.log(tasks));
  }
}

