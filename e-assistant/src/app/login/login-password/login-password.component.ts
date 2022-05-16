import { Component } from "@angular/core";
import { Router } from '@angular/router';
import {AppComponent} from '../../app.component';

@Component({
  selector: "app-login-password",
  templateUrl: "./login-password.component.html",
  styleUrls: ["./login-password.component.css"]
})
export class LoginPasswordComponent {
  email!: string;
  password!: string;

  constructor(private router: Router, private appComponent: AppComponent) {}

  login() {
    this.appComponent.userLogged();
    this.router.navigateByUrl('/pending-my-signature');
  }
}