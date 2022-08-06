import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarmenuComponent
  ],
  exports:[
    SidebarmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
