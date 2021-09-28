import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/components/pages/products/interface/product-interface.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Product[]= [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  private quantitySubject = new BehaviorSubject<number>(0);
  private totalSubject = new BehaviorSubject<number>(0);

  //devolver los observables hacia la aplicacion
  get cartAction$(): Observable<Product[]>{
    return this.cartSubject.asObservable();
  }
  get quantityAction$(): Observable<number>{
    return this.quantitySubject.asObservable();
  }
  get totalAction$(): Observable<number>{
    return this.totalSubject.asObservable();
  }

  updateCart(product: Product): void{
    this.addToCart(product);
    this.quantityProduct();
    this.calcularTotal();
  }

  resetCart(): void{
    this.cartSubject.next([]);
    this.totalSubject.next(0);
    this.quantitySubject.next(0);
    this.products = [];
  }

  private addToCart(product: Product): void {
    const isProductInCart = this.products.find( ({id})=> id == product.id);
    if(isProductInCart) { 
      isProductInCart.qty += 1;
    }
    else{
      this.products.push( {...product, qty:1});
    }
    this.cartSubject.next(this.products);
    console.log(this.cartSubject);
  }
  private quantityProduct(): void {
    const quantity = this.products.reduce( (acc, prod) => acc += prod.qty, 0);
    this.quantitySubject.next(quantity);
    console.log(quantity);
  }
  private calcularTotal(): void {
    const total = this.products.reduce( (acc, prod) => acc += (prod.costo * prod.qty), 0);
    this.totalSubject.next(total);
    console.log(total);
  }
  constructor() { }
}
