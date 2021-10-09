import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../admin/signin/signin.component';
import { ListComponent } from '../admin/list/list.component';

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "list", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
