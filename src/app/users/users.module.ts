import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent
  ]
})
export class UsersModule { }
