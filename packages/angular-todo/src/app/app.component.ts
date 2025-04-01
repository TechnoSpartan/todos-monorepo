import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, FormsModule],
  template: `
    <div style="margin: 20px;">
      <h1>Angular Todo</h1>
      <input [(ngModel)]="newTodo" placeholder="Add a todo" />
      <button (click)="addTodo()">Add</button>
      <ul>
        <li *ngFor="let todo of todos; let i = index">
          {{ todo }}
          <button (click)="removeTodo(i)">X</button>
        </li>
      </ul>
    </div>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  newTodo = "";
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
