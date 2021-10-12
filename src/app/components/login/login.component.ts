import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppstorageService } from 'src/app/services/appstorage.service';
import {UserservicesService} from '../../services/userservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalid: boolean = false;

  constructor(private _userService : UserservicesService, 
              private _appStorageService: AppstorageService, 
              private router: Router) { }

  ngOnInit(): void { 
  }

  handleLogin(data: NgForm){
    var user = this._userService.login(data.value.username, data.value.password);
    if ( Object.keys(user).length != 0) {
      this.invalid = false;
      this._appStorageService.setObject("user", user);
      this.router.navigate(['/home']);
    } else {
      this.invalid = true;
      console.error("No User Founded!");
    }
  }

}
