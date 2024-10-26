import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-other-form-cb',
  standalone: true,
  imports: [ButtonModule,CommonModule,ReactiveFormsModule,
    CheckboxModule,RadioButtonModule],
  templateUrl: './other-form-cb.component.html',
  styleUrl: './other-form-cb.component.css'
})
export class OtherFormCbComponent {
  opciones: {label: string; value:string}[] = [
    {label: 'Opción 1', value: 'opcion1'},
    {label: 'Opción 2', value: 'opcion2'},
    {label: 'Opción 3', value: 'opcion3'},
  ];

  opcionesrb: {label:string;value:string}[] = [
    {label: 'Opción A', value: 'opcionA'},
    {label: 'Opción B', value: 'opcionB'},
    {label: 'Opción C', value: 'opcionC'},
  ]

  checkboxForm: FormGroup;
  radiobuttonForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.checkboxForm = this.fb.group({
      seleccion: [[]], //inicializamos un arreglo vacio
    }),
    this.radiobuttonForm = this.fb.group({
      seleccion: [''],
    })
  }

  onSubmit(){
    console.log(this.checkboxForm.value);
    console.log(this.radiobuttonForm.value);
  }
}
