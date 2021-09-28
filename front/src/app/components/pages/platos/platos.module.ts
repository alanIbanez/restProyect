import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatosRoutingModule } from './platos-routing.module';
import { PlatosComponent } from './platos.component';
import { PlatoComponent } from './plato/plato.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlatosComponent,
    PlatoComponent
    
  ],
  imports: [
    CommonModule,
    PlatosRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlatosModule { }
