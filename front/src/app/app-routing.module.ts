import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'reportes', loadChildren: () => import('./components/pages/platos/reportes/reportes.module').then(m => m.ReportesModule) }, 
  { path: 'platos', loadChildren: () => import('./components/pages/platos/platos.module').then(m => m.PlatosModule) },
  { path: 'checkout', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule) }, { path: 'checkout', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'products', loadChildren: () => import('./components/pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'ventas', loadChildren: () => import('./components/pages/ventas/ventas.module').then(m => m.VentasModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
