import { Component, OnInit, ValueSansProvider } from '@angular/core';
import { Product } from '../products/interface/product-interface.interface';
import { ShoppingCartService } from 'src/app/components/shared/services/shopping-cart.service';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Details, Orden } from 'src/app/components/shared/interfaces/order.interface';
import { DataService } from '../../shared/services/data-service.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orden = {
    nombre: '',
    fecha: '',
    costo: ''
  };
  id!: number;
  total!: number;
  isDelivery = true;
  cart: Product[] = [];

  constructor(private shopingCartSvc: ShoppingCartService, 
    private router: Router, private dataSvc: DataService ) { }

  ngOnInit(): void {
    this.getCurrentDay();
    this.getDataCart();
    //console.log(this.getTotal());
    
  }

  private getDataCart(): void{
    this.shopingCartSvc.cartAction$
    .pipe(
      tap( (products: Product[]) => this.cart = products)
    )
    .subscribe()
  }

  private getTotal():number{
    console.log("total")
    let total!: number;
    this.shopingCartSvc.totalAction$
    .pipe(
      tap( resp => total = resp)
    )
    .subscribe()
      return total;
  }

  private getCurrentDay(): string{
    this.orden.fecha = new Date().toLocaleDateString();
    return this.orden.fecha;
  }

  onSubmit({ value: formData }: NgForm): void {
    console.log('Guardar', formData.nombre);
    const data: Orden = {
      ...formData,
      fecha: formData.fecha,
      nombre: formData.nombre,
      total: this.getTotal()
    }
      this.dataSvc.saveOrder(data).subscribe(resp => {
        this.id = resp.id;
        this.guardarDetails();
      }, error => {
        console.log(error);
      });
      /*this.dataSvc.getListarDetails().subscribe(resp => {console.log(resp)
      }, error => {
        console.log(error);
      });*/
  }

  private guardarDetails(): void{
    const details: Details[] = [];
    let subTotalito!: number;
    this.cart.forEach( (product: Product)=> {
      const{id:productId, nombre:productName, qty:quantity} = product; //destructuring renombrabndo
      //console.log("prueba");
      subTotalito = product.costo * product.qty;
      console.log(subTotalito);
      const data: any = {
        idOrden: this.id,
        idProducto: product.id,
        cantidad: product.qty,
        subTotal: subTotalito
      }
      this.dataSvc.saveDetails(data).subscribe(res=>{ 
        delay(7000);
        this.router.navigate(['/ventas']);
        this.shopingCartSvc.resetCart();
      });

      console.log(data);
    })
  }

  
  
  
}

