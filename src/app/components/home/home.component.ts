import { Component, OnInit } from '@angular/core';
import { AppstorageService } from 'src/app/services/appstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any = {};
  constructor(private _appstorage: AppstorageService) { }

  ngOnInit(): void {
    this.user = this._appstorage.getObject("user");
  }

}
