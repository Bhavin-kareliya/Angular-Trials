import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    SigninComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
