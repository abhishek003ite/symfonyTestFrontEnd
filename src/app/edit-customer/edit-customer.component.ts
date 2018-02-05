import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  public id: number;
  name: string;
  cnp: string;
  errors = [];
  constructor(private router: Router, private route: ActivatedRoute, private _customerService: CustomerService) {
      this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  editCustomer(name, cnp) {
    let customer: any;
    customer = {name: name, cnp: cnp};
    this._customerService.updateCustomer(customer, this.id).subscribe((result => {
      this.router.navigate(['/customers']);
    }), editError => this.errors = editError);
  }

}
