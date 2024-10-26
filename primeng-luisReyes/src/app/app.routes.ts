import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { OtherFormComponent } from './components/other-form/other-form.component';
import { OtherFormCbComponent } from './components/other-form-cb/other-form-cb.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path: 'logintest', component: LoginTestComponent},
    {path: 'otherform', component: OtherFormComponent},
    {path: 'otherformcb', component: OtherFormCbComponent}
];
