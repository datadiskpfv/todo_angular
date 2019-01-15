import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  // get the Http request (request) then and add authentication and then pass on to the next Http handler (next)
  // then return it
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const username = 'admin';
    const password = 'password';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    });

    return next.handle(request);
  }
}
