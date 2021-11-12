import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    /*  this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      },
    ]; */
  }

  toggleDone(id: any) {
    this.todos.map((item, index) => {
      if (index == id) item.completed = !item.completed;

      return item;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((item, i) => i !== id);
  }

  addTodo() {
    if (this.inputTodo) {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
      });
    } else {
      alert('Please enter todo !!!');
    }

    this.inputTodo = '';
  }
}
