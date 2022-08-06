import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4904ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4904ti', [Validators.required, Validators.minLength(3)]],
    precio: [0,[Validators.required, Validators.min(3)]],
    existencias: [0, [Validators.required, Validators.min(3)]]
  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4904ti',
      precio:70,
      existencias: 870, 
    })
  }
  

  camopoValido(campo:string){
    return this.miFormulario.controls[campo].errors && 
    this.miFormulario.controls[campo].touched;
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    this.miFormulario.reset();
  }

}
