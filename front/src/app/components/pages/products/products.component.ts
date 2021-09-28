import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products-service.service';
import { ShoppingCartService } from 'src/app/components/shared/services/shopping-cart.service';
import { Product } from './interface/product-interface.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productSvc: ProductsService, private shoppingCartSvc: ShoppingCartService) { }
  products!: Product[]; 
  //products!: Product[];
  ngOnInit(): void {
    this.obtenerPlatos();
  }

  obtenerPlatos(){
    this.productSvc.getListarPlatos().subscribe(resp => {
      this.products = resp;
      //console.log(resp);
      this.productSvc = resp;
    }, error => {
      console.log(error);
    });
  }

  addToCart(product: Product): void {
    //Escuchamos el evento
    //console.log('Add to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }

}
