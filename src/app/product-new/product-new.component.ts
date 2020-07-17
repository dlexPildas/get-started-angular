import { Product } from './../product';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  id: number;
  name: string;
  price: number;
  product: Product;

  @Output() newProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {
  }

  addNewProduct(): void {
    this.product = {
      id: this.id,
      name: this.name,
      price: this.price
    };

    this.newProduct.emit(this.product);
    this.product = null;
  }

}
