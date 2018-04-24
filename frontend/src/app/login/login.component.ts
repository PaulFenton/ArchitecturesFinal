import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: object = {
    name: '',
    password: '',
  };

  constructor() { }

  ngOnInit() {
  }

  login(c) {
    // TODO (Dario): call login service.
    console.log(JSON.stringify(c));
  }

}
