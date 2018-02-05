import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {Customer} from './Customer';
import {AuthService} from './auth.service';

@Injectable()
export class CustomerService {

  private url = 'http://127.0.0.1:8000/api/customers';

  constructor(private http: Http, private authenticationService: AuthService) { }

  getCustomers(): Observable<any[]> {
    const headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    return this.http.get(this.url, {headers: headers}).map(res => <Customer[]> res.json()).catch(this.handleError);
  }

  addCustomer(customer: Customer) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    return this.http.post(this.url, JSON.stringify(customer), {headers : headers}).map(res => res.json()).catch(this.handleError);
  }

  updateCustomer(customer: Customer, id) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    return this.http.put(this.url + '/' + id, JSON.stringify(customer), {headers: headers}).map(res => res.json()).catch(this.handleError);
  }

  deleteCustomer(id: any) {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    return this.http.delete(this.url + '/' + id, {headers : headers}).map(res => res.json());
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().errors || 'server error');
  }

}
