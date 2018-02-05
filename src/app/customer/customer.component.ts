import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Array<Customer> = [];
  errorMessage: string;
  constructor(private _customerService: CustomerService) { }

  getCustomers() {
    this._customerService.getCustomers().subscribe(
      customers => this.customers = customers, error => this.errorMessage = <any> error
    );
  }

  deleteCustomer(id) {
    this._customerService.deleteCustomer(id).subscribe(result => {window.location.reload();});
  }

  ngOnInit() {
  }

}
