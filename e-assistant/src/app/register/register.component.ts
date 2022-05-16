import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private router: Router, private appComponent: AppComponent) {}

  register() {
    this.appComponent.userLogged();
    this.router.navigateByUrl('/pending-my-signature');
  }
}