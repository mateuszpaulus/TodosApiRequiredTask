import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Injectable} from "@angular/core";
import {Todos} from "./todos.model";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl: string = 'https://gorest.co.in/public/v2/todos?status=pending&per_page=1&page=2';

  constructor(private http: HttpClient) {
  }

  getSecondPendingTodo(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.apiUrl)
      .pipe(
        catchError(error => throwError(() => new Error('Error')))
      );
  }
}
