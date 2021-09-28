import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
