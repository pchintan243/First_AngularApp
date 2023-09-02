import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  selectedCustomer: any;

  customers: Customer[] = [
    { id: 1, name: 'Mark Vought', address: '', city: 'London', country: "UK" },

    { id: 2, name: 'John Smith', address: '', city: 'New York', country: "USA" },

    { id: 3, name: 'Merry Ann', address: '', city: 'Berlin', country: "Germany" },

    { id: 4, name: 'Rajesh Khatri', address: '', city: 'Mumbai', country: "India" },

    { id: 5, name: 'Rahul Raj', address: '', city: 'Delhi', country: "India" }
  ]
}
