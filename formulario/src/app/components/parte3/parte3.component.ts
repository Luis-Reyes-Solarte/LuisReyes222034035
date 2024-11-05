import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-parte3',
  standalone: true,
  imports: [CommonModule,CalendarModule,ReactiveFormsModule,ButtonModule],
  templateUrl: './parte3.component.html',
  styleUrl: './parte3.component.css'
})
export class Parte3Component {
  @Input() userForm3: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm3 = this.fb.group({
      dni: ['',Validators.required],
      calendario1: ['',Validators.required],
      calendario2: ['',Validators.required],
    })
  }
  onsubmit(){
    if(this.userForm3.valid){
      console.log(this.userForm3.value)
    }else{
      console.log('valor invalido')
    }
  }
}
