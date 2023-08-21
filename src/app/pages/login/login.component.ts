import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  login() {
    if (this.username === '' || this.password === '') {
      alert('Please enter email and password');
      return;
    }
  }
}
