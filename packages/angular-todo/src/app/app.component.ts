import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
  title = 'angular';
}
