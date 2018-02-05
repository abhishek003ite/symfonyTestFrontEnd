import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { DeleteTransactionComponent } from './delete-transaction/delete-transaction.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {CustomerService} from './customer.service';
import {TransactionService} from './transaction.service';
import {AuthGuard} from './auth.guard';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '', component : AppComponent},
  {path: 'login', component : LoginComponent},
  {path: 'customers', component : CustomerComponent},
  {path: 'add-customer', component : AddCustomerComponent},
  {path: 'edit-customer/:id', component : EditCustomerComponent},
  {path: 'delete-customer/:id', component : DeleteCustomerComponent},
  {path: 'transactions', component : TransactionComponent},
  {path: 'add-transaction', component : AddTransactionComponent},
  {path: 'edit-transaction/:id', component : EditTransactionComponent},
  {path: 'delete-transaction/:id', component : DeleteTransactionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TransactionComponent,
    AddCustomerComponent,
    AddTransactionComponent,
    EditTransactionComponent,
    DeleteTransactionComponent,
    LoginComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes ),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, CustomerService, TransactionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
