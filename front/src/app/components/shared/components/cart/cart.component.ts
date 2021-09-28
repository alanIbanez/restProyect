import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total = 20;
  cantidad = 4;

  quantity$ = this.shoppinCartSvc.quantityAction$;
  total$ = this.shoppinCartSvc.totalAction$;

  constructor(private shoppinCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
