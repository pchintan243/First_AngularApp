import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent {

  constructor(private http: HttpClient) { }

  onProductSubmit(products: { pname: string, desc: string, price: string }) {
    const header = new HttpHeaders({ 'myHeader': 'data' });
    console.log(products);
    this.http.post('https://procademy-dffe6-default-rtdb.firebaseio.com/products.json',
      products,
      { headers: header })
      .subscribe((data) => {
        console.log(data);
      })
  }
}
