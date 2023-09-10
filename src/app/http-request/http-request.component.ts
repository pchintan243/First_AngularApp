import { ProductService } from './../Services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product.';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {

  spinner: boolean = false;

  editMode: boolean = false;

  currId: string = '';
  allProduct: Product[] = []
  errMsg: string = null;

  @ViewChild('productForms') form: NgForm;


  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.fetchProduct();
    this.ProductService.error.subscribe((msg) => {
      this.errMsg = msg;
    })
  }

  onProductFetch() {
    this.fetchProduct();
  }

  onProductSubmit(products: { pname: string, desc: string, price: string }) {

    if (!this.editMode) {
      this.ProductService.createProduct(products);
    }
    else {
      this.ProductService.updateProduct(this.currId, products)
    }
  }

  private fetchProduct() {
    this.spinner = true;
    this.ProductService.fetchProduct().subscribe((data) => {
      this.allProduct = data;
      this.spinner = false;
    }, (err) => {
      this.errMsg = err.message;
    })
  }

  onDeleteProduct(id: string) {
    this.ProductService.deleteProduct(id);
  }

  onDeleteAllProduct() {
    this.ProductService.deleteAllProduct();
  }

  onUpdateProduct(id: string) {

    this.currId = id;

    // Get the product id
    let cur = this.allProduct.find((curElm) => {
      return curElm.id === id;
    })
    console.log(cur);

    this.form.setValue({
      pname: cur.pname,
      desc: cur.desc,
      price: cur.price
    });

    this.editMode = true;
  }
}
