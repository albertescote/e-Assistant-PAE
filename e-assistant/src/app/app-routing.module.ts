import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPasswordComponent } from "./login/login-password/login-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "login-password", component: LoginPasswordComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
