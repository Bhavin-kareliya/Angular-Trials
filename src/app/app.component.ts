import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppstorageService } from './services/appstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Absolute';
  constructor(private _appStorageService: AppstorageService, private _router: Router) {}

  isLoggedin(){
    return this._appStorageService.getObject("user");
  }
  logout(){
    this._appStorageService.remove("user");
    this._router.navigate(['/login']);
  }
}
