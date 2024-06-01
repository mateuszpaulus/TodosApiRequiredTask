import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodosService} from "./todos.service";
import {AsyncPipe, JsonPipe, NgForOf} from "@angular/common";
import {Todos} from "./todos.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    JsonPipe
  ],
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: Todos[] = [];
  private todosSubscribe: Subscription = new Subscription();


  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.todosSubscribe = this.todosService.getSecondPendingTodo().subscribe(
      todos => {
        return this.todos = todos
      },
    );
  }

  ngOnDestroy() {
    this.todosSubscribe.unsubscribe();
  }
}
