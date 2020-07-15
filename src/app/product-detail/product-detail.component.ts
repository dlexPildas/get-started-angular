import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  @Output() deleteProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(): void {
    this.deleteProduct.emit(this.product);
  }
}
