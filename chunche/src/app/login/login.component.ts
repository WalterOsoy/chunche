import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() {
   }

  ngOnInit(): void {
  }
  onLogin() {
    console.warn(this.profileForm.value.email);
    console.warn(this.profileForm.value.password);
    if (this.profileForm.value.email == "admin" && this.profileForm.value.email == ""){
      //ya esta dentro
      //como cambiar el boton del login
      console.warn("esta dentro");
    }
  }


}
