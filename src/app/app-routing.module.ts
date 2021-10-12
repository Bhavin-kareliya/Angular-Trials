import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "admin", loadChildren:()=>import ('./admin/admin.module').then(module=>module.AdminModule)},
  {path: "users", loadChildren:()=>import ('./users/users.module').then(module=>module.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
