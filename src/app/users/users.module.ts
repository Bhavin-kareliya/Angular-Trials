import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    SignupComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  exports: [
    SignupComponent,
    PageNotFoundComponent
  ]
})
export class UsersModule { }
