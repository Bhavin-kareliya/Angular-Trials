import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppstorageService } from './appstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private _appstorage: AppstorageService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = !!this._appstorage.getObject("user");
    if(user){
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }


}
