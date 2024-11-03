import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ButtonModule],
  templateUrl: './parte2.component.html',
  styleUrl: './parte2.component.css'
})
export class Parte2Component {

  userForm2: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm2 = this.fb.group({
      nombre_gerente: ['',Validators.required],
      email_gerente: ['',[Validators.required,Validators.email]],
    })
  }
  onsubmit(){
    if(this.userForm2.valid){
      console.log(this.userForm2.value)
    }else{
      console.log('valor invalido')
    }
  }
}
