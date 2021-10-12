import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UserservicesService } from './services/userservices.service';
import { AppstorageService } from './services/appstorage.service';
import { HomeComponent } from './components/home/home.component';
import { AuthguardService } from './services/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    UserservicesService,
    AppstorageService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
