import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) {}
  title = 'e-assistant';
  userLoggedIn!: boolean;
  userloggedOut!: boolean;

  ngOnInit(): void{
    this.userLoggedIn = false;
    this.userloggedOut = true;
  }

  userLogged() {
    this.userLoggedIn = true;
    this.userloggedOut = false;
  }

  refresh(): void {
    const httpOptions = {
      headers: new HttpHeaders(),
    };
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://localhost:5000/sync', null, httpOptions).subscribe();
  }
}
