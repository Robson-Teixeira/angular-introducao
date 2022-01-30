import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Minhas Tarefas';
  public todos: Todo[] = [];

  constructor() {
    this.todos.push(new Todo(1, 'Tarefa 1', false));
    this.todos.push(new Todo(2, 'Tarefa 2', false));
    this.todos.push(new Todo(3, 'Tarefa 3', true));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1)
      this.todos.splice(index, 1);
  }
}
