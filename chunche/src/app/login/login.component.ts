import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User } from '../models/user';
//import { JwtResponse } from '../models/jwt-response'
//import { Tap } from 'rxjs/operator';
//import {observable, BehaviorSubjet } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
