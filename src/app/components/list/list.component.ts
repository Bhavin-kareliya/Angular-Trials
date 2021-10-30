import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any;

  constructor(private _userservice: UserservicesService) { }

  ngOnInit(): void {
    this.users = this._userservice.getAllUsers();
  }

}
