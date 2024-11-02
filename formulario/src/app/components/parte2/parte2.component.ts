import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './parte2.component.html',
  styleUrl: './parte2.component.css'
})
export class Parte2Component {

  userForm2: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm2 = this.fb.group({
      nombre_gerente: ['',Validators.required],
      email_gerente: ['',Validators.required,Validators.email],
    })
  }
}
