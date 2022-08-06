import { Component } from '@angular/core';

interface MenuItem{
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class SidebarmenuComponent {

  templateMenu: MenuItem[]=[
    {
      texto: 'Basico',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinamico',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switche',
      ruta: './template/switches'
    }
  ];
  reactiveMenu: MenuItem[]=[
    {
      texto: 'Basico',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinamico',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switche',
      ruta: './reactive/switches'
    }
  ];
  authMenu: MenuItem[]=[
    {
      texto: 'Registro',
      ruta: './auth/registro'
    },
    {
      texto: 'Login',
      ruta: './auth/login'
    }
  ]

}
