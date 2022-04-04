import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';

console.log("Order module Loding")
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
