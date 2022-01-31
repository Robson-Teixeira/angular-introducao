import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Lista de Tarefas';
  public todos: Todo[] = [];
  public form: FormGroup;
  public mode: string = 'list';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([ //Usar 'Validators.compose' quando houver mais de uma validação
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.load();
  }

  add() {    
    const title: string = this.form.get('title')?.value; //Ou this.form.controls['title'].value
    const id: number = this.todos.length +1;
    
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1) {
      this.todos.splice(index, 1);
      this.save();
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }

  markAsUnDone(todo: Todo) {
    todo.done = false;
    this.save();
  }  

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data); //Ou sessionStorage    
    this.changeMode('list');
  }

  load() {
    const data = localStorage.getItem('todos');

    if (data)
      this.todos = JSON.parse(data);
    else
      this.todos = [];
  }

  changeMode(mode: string) {
    this.mode = mode;
  }
}
