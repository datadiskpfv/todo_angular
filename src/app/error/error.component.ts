import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Oops something has gone wrong, contact support at it@example.com';

  constructor() { }

  ngOnInit() {
  }

}
