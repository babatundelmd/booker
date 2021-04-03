import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  data = 'http://localhost:3000/posts';
  lend = 'http://localhost:3000/lend';
  constructor(private http: HttpClient) {}

  updateBook(id, input) {
    return this.http.patch(`${this.data}/${id}`, input).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error) => {
          return error;
        }
      )
    );
  }

  getBooks(): Observable<any> {
    return this.http.get(`${this.data}`).pipe(
      tap(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error) => {
          return error;
        }
      )
    );
  }

  getBook(id): Observable<any> {
    return this.http.get(`${this.data}/${id}`).pipe(
      tap(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error) => {
          return error;
        }
      )
    );
  }

  deleteBook(id: any): Observable<any> {
    return this.http.delete(`${this.data}/${id}`).pipe(
      tap(
        (response: any) => {
          if (response.data) {
            return response;
          }
        },
        (error) => {
          return error;
        }
      )
    );
  }

  lendBook(input: any): Observable<any> {
    return this.http.post<any>(`${this.lend}`, input).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }

  postBook(input: string): Observable<any> {
    return this.http.post<any>(`${this.data}`, input).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
