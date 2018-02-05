import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Transaction} from './Transaction';
import {AuthService} from './auth.service';
import {Customer} from './Customer';

@Injectable()
export class TransactionService {

  private url = 'http://127.0.0.1:8000/api/transactions';

  constructor(private http: Http, private authenticationService: AuthService) { }

  getTransactions(): Observable<any[]> {
    const headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    return this.http.get(this.url, {headers: headers}).map(res => <Customer[]> res.json()).catch(this.handleError);
  }

  addTransaction(transaction: Transaction) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    return this.http.post(this.url, JSON.stringify(transaction), {headers : headers}).map(res => res.json()).catch(this.handleError);
  }

  updateTransaction(customer: Customer, id) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    return this.http.put(this.url + '/' + id, JSON.stringify(customer), {headers: headers}).map(res => res.json()).catch(this.handleError);
  }

  deleteTransaction(id: any) {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    return this.http.delete(this.url + '/' + id, {headers : headers}).map(res => res.json());
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');
  }

}
