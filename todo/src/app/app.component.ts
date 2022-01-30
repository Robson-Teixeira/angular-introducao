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
  }

  add() {    
    const title: string = this.form.get('title')?.value; //Ou this.form.controls['title'].value
    const id: number = this.todos.length +1;
    
    this.todos.push(new Todo(id, title, false));
    this.clear();
  }

  clear() {
    this.form.reset();
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
