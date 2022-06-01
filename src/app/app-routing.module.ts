import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPasswordComponent } from "./login/login-password/login-password.component";
import { LoginClaveComponent } from "./login/login-clave/login-clave.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { PendingMySignatureComponent } from './home-page/pending-my-signature/pending-my-signature.component';
import { PendingOtherSignaturesComponent } from './home-page/pending-other-signatures/pending-other-signatures.component';
import { ProcessedComponent } from './home-page/processed/processed.component';

const routes: Routes = [
  { path: 'pending-my-signature', component: PendingMySignatureComponent, pathMatch: 'full' },
  { path: 'pending-other-signatures', component: PendingOtherSignaturesComponent, pathMatch: 'full' },
  { path: 'processed', component: ProcessedComponent, pathMatch: 'full' },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "login-password", component: LoginPasswordComponent, pathMatch: "full" },
  { path: "login-clave", component: LoginClaveComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
