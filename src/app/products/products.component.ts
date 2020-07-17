import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {id: 1, name: 'Caneta', price: 2.3},
    {id: 2, name: 'Lapis', price: 1.0},
    {id: 1, name: 'Borracha', price: 0.5},
  ];
  isScreenDetail = false;
  productToDetail: Product;
  isRegister = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetailProduct(product: Product): void {
    this.isScreenDetail = true;
    this.productToDetail = product;
  }

  deleteProduct(productToDelete: Product): void {
    this.products = this.products.filter(product => product !== productToDelete);
    this.isScreenDetail = false;
  }

  registerNewProduct(): void {
    this.isRegister = !this.isRegister;
  }
}
