import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './customer-service.service'
@Component({

  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerServiceService]
})
export class CustomerComponent implements OnInit {
  customers: any[];
 

  name = "";

  constructor(private _customerService: CustomerServiceService) { }

  ngOnInit() {
    this.customers = this._customerService.getCustomers();
  }

}
