import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-parte1',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,
    ButtonModule],
  templateUrl: './parte1.component.html',
  styleUrl: './parte1.component.css'
})
export class Parte1Component {

  userForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      telefono: ['',Validators.required],
    })
  }

  onsubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
    }else{
      console.log('valor invalido')
    }
  }
}
