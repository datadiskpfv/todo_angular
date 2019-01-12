import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'pvalle';
  password = '';

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router - dependency injection
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {

    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;

      // the router was DI in
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }

    this.displayInfo();
  }

  displayInfo() {
    console.log('Username and Password: ' + this.username + ' ' + this.password);
    console.log('Invalid Credentials: ' + this.invalidLogin);
  }
}
