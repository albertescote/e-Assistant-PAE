import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login-password.component.html",
  styleUrls: ["./login-password.component.css"]
})
export class LoginPasswordComponent {
  email!: string;
  password!: string;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}