import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL_JPA} from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  // CRUD operations
  createTodo(username, todo) {

    // the todo object will be added to the body of the request
    console.log(`Create Todo ${username}`)
    return this.http.post<Todo>(`${API_URL_JPA}/users/${username}/todos`, todo);
  }

  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`${API_URL_JPA}/users/${username}/todos`);
  }

  retrieveTodo(username, id) {
    return this.http.get<Todo>(`${API_URL_JPA}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put<Todo>(`${API_URL_JPA}/users/${username}/todos/${id}`, todo);
  }

  deleteTodo(username, id) {
    return this.http.delete(`${API_URL_JPA}/users/${username}/todos/${id}`);
  }
}
