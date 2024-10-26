import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-other-form',
  standalone: true,
  imports: [ButtonModule,CommonModule,CalendarModule,
    DropdownModule,ReactiveFormsModule],
  templateUrl: './other-form.component.html',
  styleUrl: './other-form.component.css'
})
export class OtherFormComponent {
  otherForm: FormGroup;

  cities: any[] = [{label: 'New York', value: 'NY'},{label: 'London', value: 'LDN'},{label: 'Paris', value: 'PRS'}]

  constructor(private fb:FormBuilder, private router: Router){
    this.otherForm = this.fb.group({
      name:['',Validators.required],
      birthdate:['',Validators.required],
      city:[null,Validators.required],
    })
  }

  onSubmit(){
    if(this.otherForm.valid){
      console.log(this.otherForm.value);
      this.router.navigate(['/logintest']);
    }else{
      console.log('formulario invalido')
    }
  }
  
}
