import { Component } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,InputTextModule,FormGroupDirective, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm = this.fb.group({
    usuario: ['',[Validators.required], Validators.name],
    password: ['',Validators.required]
  });

constructor(private fb: FormBuilder){}

}