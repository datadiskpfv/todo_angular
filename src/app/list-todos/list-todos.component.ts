import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    { id: 1, description: 'Learn to program in Java'},
    { id: 2, description: 'Learn to program in Javascript'},
    { id: 3, description: 'Learn to program in Python'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
