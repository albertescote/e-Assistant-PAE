import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPasswordComponent } from "./login/login-password/login-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home-page/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "login-password", component: LoginPasswordComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
