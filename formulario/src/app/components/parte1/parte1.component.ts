import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parte1',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './parte1.component.html',
  styleUrl: './parte1.component.css'
})
export class Parte1Component {

  userForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      email: ['',Validators.required,Validators.email],
      telefono: ['',Validators.required],
    })
  }
}
