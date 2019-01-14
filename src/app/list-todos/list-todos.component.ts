import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

// Todo class
export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   new Todo(1, 'Learn to program in Java', false, new Date()),
  //   new Todo(2, 'Learn to program in Javascript', false, new Date()),
  //   new Todo(3, 'Learn to program in Python', false, new Date())
  //   ];

  todos: Todo[];
  message: string;

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('pvalle').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('pvalle', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}
