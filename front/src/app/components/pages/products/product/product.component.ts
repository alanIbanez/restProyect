import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../interface/product-interface.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

  onClick(){
    //console.log("CLICK", this.product);
    this.addToCartClick.emit(this.product);
  }

}
