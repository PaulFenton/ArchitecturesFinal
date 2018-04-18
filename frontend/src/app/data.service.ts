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

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getTasks(): Observable<Task[]> {
    return this.http.get("http://localhost:8080/getTasks")
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
