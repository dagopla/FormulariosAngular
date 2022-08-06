import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailService]],
    username: ['', [Validators.required, this.validatorService.noPuedeser]],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],

  },{
    validators:[this.validatorService.camposIguales('password1','password2')]
  });


  get emailErrors(): string{
    const errors= this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email es obligatorio'
    }else if(errors?.['pattern']){
      return 'El valor del correo no tiene el formato adecuado'
    }else if(errors?.['emailTomado']){
      return 'El email ya fue registrado'
    }
    return ''
  }


  constructor(private fb: FormBuilder,
              private validatorService:ValidatorService,
              private emailService: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com',
      username: 'Fernando',
      password1: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }
  guardar() {
    this.miFormulario.markAllAsTouched();
  }

}
