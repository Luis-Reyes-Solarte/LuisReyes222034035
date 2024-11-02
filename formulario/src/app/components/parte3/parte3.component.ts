import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-parte3',
  standalone: true,
  imports: [CommonModule,CalendarModule],
  templateUrl: './parte3.component.html',
  styleUrl: './parte3.component.css'
})
export class Parte3Component {
  userForm3: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm3 = this.fb.group({
      identificacion: ['',Validators.required],
      apellido: ['',Validators.required],
      email: ['',Validators.required,Validators.email],
      telefono: ['',Validators.required],
    })
  }
}
