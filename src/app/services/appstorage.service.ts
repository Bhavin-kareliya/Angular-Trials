import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppstorageService {
  constructor() { }

  setObject(name: string, object: any) {
    localStorage.setItem(name, JSON.stringify(object));
  }

  setString(name: string, value: string) {
    return localStorage.setItem(name, value);
  }
  
  setNumber(name: string, value: number) {
    localStorage.setItem(name, value.toString());
  }

  getString(name: string) {
    return localStorage.getItem(name);
  }

  getObject(name: string) {
    var data = localStorage.getItem(name);
    return (data != null) ? JSON.parse(data) : null;
  }

  getNumber(name: string) {
    var data = localStorage.getItem(name);
    return (data != null) ? Number.parseInt(data) : null;
  }

  remove(name: string) {
    return localStorage.removeItem(name);
  }
}
