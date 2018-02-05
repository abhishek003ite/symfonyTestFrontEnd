import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../transaction.service';
import {Transaction} from '../Transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Array<Transaction>= [];
  errorMessage: string;
  constructor(private _transactionService: TransactionService) { }

  getTransactions() {
    this._transactionService.getTransactions().subscribe(
      transactions => this.transactions = transactions, error => this.errorMessage = <any> error
    );
  }

  deleteTransaction(id) {
    this._transactionService.deleteTransaction(id).subscribe(
      result => {
        window.location.reload();
      }
    );
  }

  ngOnInit() {
  }

}
