import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class Task {
  constructor(
    public id: string,
    public name: string,
    public assignedTo: string,
    public dueDate: string
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

  constructor(private http: Http) { }

  // starts new process instance when a new estimate request is made
  startProcessInstance(instanceConfig: EstimateProcessConfig): Observable<string> {
    return this.http.post("http://localhost:8080/startProcessInstance", instanceConfig)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // gets all tasks for a user
  getTasks(userId: string): Observable<Task[]> {
    return this.http.get("http://localhost:8080/getTasks/" + userId)
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // gets all tasks for all users
  getAllTasks(): Observable<Task[]> {
    return this.http.get("http://localhost:8080/getAllTasks")
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // completes a task based on taskId
  completeTask(taskId: string): Observable<string> {
    return this.http.get("http://localhost:8080/completeTask/" + taskId)
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
