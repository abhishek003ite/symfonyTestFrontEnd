import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {URLSearchParams} from '@angular/http';
@Injectable()

export class AuthService {

  public token: string;

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login (username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders();

    headers.append('content-type', 'application/x-www-form-urlencoded');

    return this.http.post<any>('http://127.0.0.1:8000/api/login_check', {'username': username, 'password': password}, {headers: headers})
      .map((response: Response) => {
        const token = response.json().token;
        if (token) {
          this.token = token;

          localStorage.setItem('currentUser', JSON.stringify({username: username, password: password}));

          return true;
        } else {
          return false;
        }
      }).catch((error: any) => console.log(error));
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private handleError(error: Response) {
    return Observable.throw(error.json() || 'server error');
  }
}
