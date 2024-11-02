import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-test',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,
    PasswordModule,CommonModule], //modulos requeridos para el trabajo con formularios
  templateUrl: './login-test.component.html',
  styleUrl: './login-test.component.css'
})
export class LoginTestComponent {

  userForm: FormGroup;

  constructor(private fb:FormBuilder, private loginService: LoginService){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit(){
    if(this.userForm.valid){
      const {email,password} = this.userForm.value;
      this.loginService.login(email,password).subscribe(Response => console.log());
      //se pasa los datos al servicio
      console.log(this.userForm.value);
    }else{
      console.log('formulario invalido')
    }
  }
}
