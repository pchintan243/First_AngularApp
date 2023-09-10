import { ProductService } from './../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  spinner: boolean = false;

  allProduct: Product[] = []

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  onProductFetch() {
    this.fetchProduct();
  }

  onProductSubmit(products: { pname: string, desc: string, price: string }) {
    this.ProductService.createProduct(products);
  }

  private fetchProduct() {
    this.spinner = true;
    this.ProductService.fetchProduct().subscribe((data) => {
      this.allProduct = data;
      this.spinner = false;
    })
  }

  onDeleteProduct(id: string) {
    this.ProductService.deleteProduct(id);
  }

  onDeleteAllProduct() {
    this.ProductService.deleteAllProduct();
  }
}
