import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPasswordComponent } from "./login/login-password/login-password.component";
import { LoginClaveComponent } from "./login/login-clave/login-clave.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PendingMySignatureComponent } from './home-page/pending-my-signature/pending-my-signature.component';
import { PendingOtherSignaturesComponent } from './home-page/pending-other-signatures/pending-other-signatures.component';
import { ProcessedComponent } from './home-page/processed/processed.component';

@NgModule({
  declarations: [
    AppComponent, LoginPasswordComponent, LoginClaveComponent, LoginComponent, RegisterComponent, PendingMySignatureComponent, PendingOtherSignaturesComponent, ProcessedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
