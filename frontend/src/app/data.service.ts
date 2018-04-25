import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

export class Task {
  constructor(
    public id: string,
    public name: string,
    public assignedTo: string,
    public dueDate: string
  ) {}
}

export class LineItem {
  constructor(
    public id: Number,
    public name: string,
    public category: string,
    public description: string,
    public cost: Number
  ) {}
}
export class Estimate {
  constructor(
    public title: string,
    public description: string,
    public costs: LineItem[],
    public total: Number
  ) {}
}

export class EstimateProcessConfig {
  constructor(
    public name: string,
    public assignee: string,
    public description: string,
    public duedate: Date,
    public approver: string
  ) {}
}

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  // starts new process instance when a new estimate request is made
  startProcessInstance(instanceConfig: EstimateProcessConfig): Observable<string> {
    return this.http.post('http://localhost:8080/startProcessInstance', instanceConfig)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error starting Process Instance'));
  }

  // gets all tasks for a user
  getTasks(userId: string): Observable<Task[]> {
    return this.http.get('http://localhost:8080/getTasks/' + userId)
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error getting Tasks'));
  }

  // gets details for a specific task
  getTaskDetails(taskId: string): Observable<Task> {
    return this.http.get('http://localhost:8080/getTaskDetails/' + taskId)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error getting task details'));
  }

  // gets all tasks for all users
  getAllTasks(): Observable<Task[]> {
    return this.http.get('http://localhost:8080/getAllTasks')
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error getting all tasks'));
  }

  // completes a task based on taskId
  completeTask(taskId: string, estimate: Estimate): Observable<string> {
    return this.http.post('http://localhost:8080/completeTask/' + taskId, estimate)
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error completing task'));
  }
}
