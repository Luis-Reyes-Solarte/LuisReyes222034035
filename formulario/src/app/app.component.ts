import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parte1Component } from './components/parte1/parte1.component';
import { Parte2Component } from './components/parte2/parte2.component';
import { Parte3Component } from './components/parte3/parte3.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Parte1Component,Parte2Component,
    Parte3Component,CardModule,InputTextModule,
    ReactiveFormsModule,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario';
  
  userForm: FormGroup;
  userForm2: FormGroup;
  userForm3: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      telefono: ['',Validators.required],
    });
    this.userForm2 = this.fb.group({
      nombre_gerente: ['',Validators.required],
      email_gerente: ['',[Validators.required,Validators.email]],
    });
    this.userForm3 = this.fb.group({
      dni: ['',Validators.required],
      calendario1: ['',Validators.required],
      calendario2: ['',Validators.required],
    })
  }
  
  onsubmit(){
    if(this.userForm.valid && this.userForm2.valid && this.userForm3.valid){
      console.log(this.userForm.value)
      console.log(this.userForm2.value)
      console.log(this.userForm3.value)
    }else{
      console.log('valor invalido')
    }
  }
}
