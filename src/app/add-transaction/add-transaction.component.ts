import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../transaction.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  customerId: number;
  amount: number;
  errors = [];
  constructor(private _transactionService: TransactionService, private router: Router) { }

  addTransaction(customerId, amount) {
    let transaction: any;
    transaction = {customerId: customerId, amount: amount};
    this._transactionService.addTransaction(transaction).subscribe((result => {
        this.router.navigate(['/transactions']);
    }), addError => this.errors = addError);
  }

  ngOnInit() {
  }

}
