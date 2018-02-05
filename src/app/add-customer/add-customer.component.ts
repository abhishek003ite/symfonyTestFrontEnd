import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  name: string;
  cnp: string;
  errors = [];

  constructor(private _customerService: CustomerService, private router: Router) { }

  addCustomer(name, cnp) {
    let customer: any;

    customer = {name: name, cnp: cnp};

    this._customerService.addCustomer(customer).subscribe(( result => {
      this.router.navigate(['/customers']);
    }), addError => this.errors = addError);
  }

  ngOnInit() {
  }

}
