import { Component, OnInit } from '@angular/core';
import { Form, FormArray, NgForm } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent {
	autoFill = "off";
	usernamePH = "Please Enter Your Username";
	passwordPH = "Please Enter Your Password";
	UserDB = [
		{
			username: "admin",
			password: "admin"
		},
		{
			username: "user",
			password: "user"
		}
	]
	flag = 0;
	formData: any = {};

	login(formData: NgForm) {
		console.warn(formData);
		this.formData = formData;
		// for (var item of this.UserDB) {
		// 	if (item.username == formData.username && item.password == password) {
		// 		this.flag = this.flag + 1;
		// 	}
		// }
		// if (this.flag == 0)
		// 	console.error("Invalid Credentials");
		// else
		// 	console.info("Login Successfull");

	}
}
