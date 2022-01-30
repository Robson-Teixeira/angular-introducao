import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minhas Tarefas';

  public todos: any[] = [];

  constructor() {
    this.todos.push('Tarefa 1');
    this.todos.push('Tarefa 2');
    this.todos.push('Tarefa 3');
  }
}
