import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

export class Task {
  constructor(
    public id: string,
    public name: string,
    public description: string,
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
const options = {responseType: 'text' as 'text'};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  // starts new process instance when a new estimate request is made
  startProcessInstance(instanceConfig: EstimateProcessConfig): Observable<string> {
    return this.http.post('http://localhost:8080/startProcessInstance', instanceConfig)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error starting Process Instance'));
  }

  // gets all tasks for a user
  getTasks(userId: string): Observable<Task[]> {
    return this.http.get('http://localhost:8080/getTasks/' + userId)
       .map((res: Response) => res)
       .catch((error: any) => Observable.throw(error || 'Server error getting Tasks'));
  }

  // gets details for a specific task
  getTaskDetails(taskId: string): Observable<Task> {
    return this.http.get('http://localhost:8080/getTaskDetails/' + taskId)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error getting task details'));
  }

  // gets estimate details for an approval task
  getEstimate(taskId: string): Observable<Estimate> {
    return this.http.get('http://localhost:8080/getEstimate/' + taskId)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error|| 'Server error getting task details'));
  }

    // gets estimate details for a review task
    getReview(taskId: string): Observable<Estimate> {
      return this.http.get('http://localhost:8080/getReview/' + taskId)
        .map((res: Response) => res)
        .catch((error: any) => Observable.throw(error|| 'Server error getting task details'));
    }

  // gets all tasks for all users
  getAllTasks(): Observable<Task[]> {
    return this.http.get('http://localhost:8080/getAllTasks/')
       .map((res: Response) => res)
       .catch((error: any) => {console.log(error); return Observable.throw(error || 'Server error getting all tasks')});
  }

  // completes a task based on taskId

  completeTask(taskId: string, payload: any): Observable<string> {
    return this.http.post('http://localhost:8080/completeTask/' + taskId, payload)
       .map( (res: Response) => res)
       .catch((error: any) => Observable.throw(error || 'Server error completing task'));
  }
}
