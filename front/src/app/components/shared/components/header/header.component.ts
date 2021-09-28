import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  goToPuntoDeVenta(): void {
    this.router.navigate(['/products']);
  }
  goToVentas(): void {
    this.router.navigate(['/ventas']);
  }
  goToPlatos(): void {
    this.router.navigate(['/platos']);
  }
 goToReporte(): void {
  this.router.navigate(['/reportes']);
  }
  goToCheckout(): void {
    this.router.navigate(['/checkout']);
    }


}
