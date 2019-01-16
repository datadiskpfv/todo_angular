import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // used to get parameters from URI
    this.id = this.route.snapshot.params['id'];

    // The below is used because we are using asynchronous service, so you need a blank Todo
    this.todo = new Todo(this.id, '', false, new Date());

    // todoService accesses the Spring Boot application
    if (this.id != -1 ) {
      console.log('should ony see this on positive numbers');
      this.todoService.retrieveTodo('pvalle', this.id)
        .subscribe(
          data => this.todo = data
        );
    }
  }

  saveTodo() {
    if (this.id == -1 ) {
      // Create Todo
      console.log('Creating new Todo');
      this.todoService.createTodo('pvalle', this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
          }
        );
    } else {
      console.log('Updating existing Todo');
      this.todoService.updateTodo('pvalle', this.id, this.todo)
        .subscribe(
          data =>  {
            console.log(data);
            this.router.navigate(['todos']);
          }
        );
    }
  }

}
