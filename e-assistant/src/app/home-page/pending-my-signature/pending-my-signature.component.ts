import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-my-signature',
  templateUrl: './pending-my-signature.component.html',
  styleUrls: ['./pending-my-signature.component.css'],
})
export class PendingMySignatureComponent implements OnInit {
  pdfSrc = "'http://www.africau.edu/images/default/sample.pdf'";

  constructor() {}

  ngOnInit(): void {}

  changeToDocument(): void {}
}
