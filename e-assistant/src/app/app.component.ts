import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'e-assistant';
  userLoggedIn!: boolean;
  userloggedOut!: boolean;

  ngOnInit(): void {
    this.userLoggedIn = false;
    this.userloggedOut = true;
  }

  userLogged() {
    this.userLoggedIn = true;
    this.userloggedOut = false;
  }

  refresh() {
    this.router.navigateByUrl('/pending-my-signature');
  }
}
