import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "list", component: ListComponent, canActivate:[AuthguardService]},
  {path: "home", component: HomeComponent, canActivate:[AuthguardService]},
  //wild-card entry (Used when page is not found)
  {path: "**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
