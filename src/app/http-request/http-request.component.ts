import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { Product } from '../model/product.';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  allProduct: Product[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  onProductFetch() {
    this.fetchProduct();
  }

  onProductSubmit(products: { pname: string, desc: string, price: string }) {
    const header = new HttpHeaders({ 'myHeader': 'data' });
    console.log(products);
    this.http.post<{ pname: string }>('https://procademy-dffe6-default-rtdb.firebaseio.com/products.json',
      products,
      { headers: header })
      .subscribe((data) => {
        console.log(data);
      })
  }

  private fetchProduct() {
    this.http.get<{ [key: string]: Product }>('https://procademy-dffe6-default-rtdb.firebaseio.com/products.json')
      .pipe(map((res) => {
        const products = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            products.push({ ...res[key], id: key })
          }
        }
        return products;
      }))
      .subscribe((data) => {
        this.allProduct = data;
        console.log(data);
      })
  }
}
