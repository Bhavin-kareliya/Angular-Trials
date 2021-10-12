import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  users = [
    { "id": 1, "username": "bhavin", "password": "1234" },
    { "id": 2, "username": "yash", "password": "1234" },
    { "id": 3, "username": "keval", "password": "1234" },
    { "id": 4, "username": "vats", "password": "1234" },
    { "id": 5, "username": "admin", "password": "1234" },
    { "id": 6, "username": "user", "password": "1234" },
  ]

  constructor() { }

  login(name: string, pass: string) {
    console.log("login checking");
    var userdata = {};
    this.users.forEach(element => {  
      if (element.username == name && element.password == pass) 
      { 
        userdata = element;
      };
    });
    console.warn(userdata);
    return userdata;
  }

  getAllUsers(){
    return this.users;
  }
}
