import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
