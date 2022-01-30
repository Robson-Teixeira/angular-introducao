import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Minhas Tarefas';
  public todos: Todo[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([ //Usar 'Validators.compose' quando houver mais de uma validação
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.todos.push(new Todo(1, 'Tarefa 1', false));
    this.todos.push(new Todo(2, 'Tarefa 2', false));
    this.todos.push(new Todo(3, 'Tarefa 3', true));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1)
      this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUnDone(todo: Todo) {
    todo.done = false;
  }  
}
