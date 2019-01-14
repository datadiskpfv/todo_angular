import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // used to get parameters from URI
    this.id = this.route.snapshot.params['id'];

    // The below is used because we are using asynchronous service, so you need a blank Todo
    this.todo = new Todo(1, '', false, new Date());

    // todoService accesses the Spring Boot application
    this.todoService.retrieveTodo('pvalle', this.id)
      .subscribe(
        data => this.todo = data
      );
  }

}
