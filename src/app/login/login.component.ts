import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

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
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

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

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
            console.log(error);
            this.invalidLogin = true;
        }
      );
  }

  handleJWTBasicAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }

  displayInfo() {
    console.log('Username and Password: ' + this.username + ' ' + this.password);
    console.log('Invalid Credentials: ' + this.invalidLogin);
  }
}
