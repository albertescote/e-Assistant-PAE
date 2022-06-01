import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import PSPDFKit from "pspdfkit";

@Component({
  selector: 'app-pending-my-signature',
  templateUrl: './pending-my-signature.component.html',
  styleUrls: ['./pending-my-signature.component.css']
})
export class PendingMySignatureComponent implements OnInit {

  pdf =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    PSPDFKit.load({
        baseUrl: location.protocol + "//" + location.host + "/assets/",
        document: "../../../assets/pdf/diptic-informatiu-gei-ca-br.pdf",
        container: ".doc1"
      }).then((instance) => {
        (<any>window).instance = instance;
      });

    PSPDFKit.load({
        baseUrl: location.protocol + "//" + location.host + "/assets/",
        document: "../../../assets/pdf/diptic-informatiu-gei-ca-br.pdf",
        container: ".doc2"
      }).then((instance) => {
        (<any>window).instance = instance;
      });

    PSPDFKit.load({
        baseUrl: location.protocol + "//" + location.host + "/assets/",
        document: "../../../assets/pdf/diptic-informatiu-gei-ca-br.pdf",
        container: ".doc3"
      }).then((instance) => {
        (<any>window).instance = instance;
      });
  }

  signDocument1(): void {
    const httpOptions = {
 	 	headers: new HttpHeaders()
	  }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://localhost:5000/sign', null, httpOptions).subscribe();
  }
  signDocument2(): void {
    const httpOptions = {
 	 	headers: new HttpHeaders()
	  }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://localhost:5000/sign', null, httpOptions).subscribe();
  }
  signDocument3(): void {
    const httpOptions = {
 	 	headers: new HttpHeaders()
	  }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://localhost:5000/sign', null, httpOptions).subscribe();
  }
}
