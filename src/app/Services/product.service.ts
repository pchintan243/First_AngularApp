import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Product } from '../model/product.';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createProduct(products: { pname: string, desc: string, price: string }) {
    const header = new HttpHeaders({ 'myHeader': 'data' });
    console.log(products);
    this.http.post<{ pname: string }>('https://procademy-dffe6-default-rtdb.firebaseio.com/products.json',
      products,
      { headers: header })
      .subscribe((data) => {
        console.log(data);
      }, (err) => {
        this.error = err.message;
      })
  }

  fetchProduct() {

    const header = new HttpHeaders().set('Content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')

    return this.http.get<{ [key: string]: Product }>('https://procademy-dffe6-default-rtdb.firebaseio.com/products.json', { 'headers': header })
      .pipe(map((res) => {
        const products = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            products.push({ ...res[key], id: key })
          }
        }
        return products;
      }))
  }

  deleteProduct(id: string) {
    this.http.delete('https://procademy-dffe6-default-rtdb.firebaseio.com/products/' + id + '.json').subscribe()
  }

  deleteAllProduct() {
    this.http.delete('https://procademy-dffe6-default-rtdb.firebaseio.com/products.json').subscribe();
  }

  updateProduct(id: string, value: Product) {
    this.http.put('https://procademy-dffe6-default-rtdb.firebaseio.com/products/' + id + '.json', value).subscribe();
  }
}
