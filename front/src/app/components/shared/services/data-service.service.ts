import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsOrder, Orden, Details } from '../interfaces/order.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://localhost:44361/';
  apiOrden = "api/Orden";
  apiDetalle = "api/Detalle";
  constructor(private http: HttpClient) { }
  
  getListarOrden(): Observable<any>{
    return this.http.get(this.url + this.apiOrden);
  }

  saveOrder(orden: Orden): Observable<Orden>{
    console.log(orden);
    return this.http.post<Orden>(this.url + this.apiOrden, orden);
  }

  updateOrden(id: number, orden: Orden): Observable<Orden>{
    return this.http.put<Orden>(this.url + this.apiOrden + id, orden);
  }
  deleteOrden(id: number): Observable<Orden>{
    return this.http.delete<Orden>(this.url + this.apiOrden + id);
  }

  //detalle
  getListarDetails(): Observable<any>{
    return this.http.get(this.url + this.apiDetalle);
  }
  saveDetails(detalles: Details): Observable<Details> {
    return this.http.post<Details>(this.url + this.apiDetalle, detalles);
  }

  updateDetails(id: number, detalles: Details): Observable<Details>{
    return this.http.put<Details>(this.url + this.apiDetalle + id, detalles);
  }
  deleteDetails(id: number): Observable<Details>{
    return this.http.delete<Details>(this.url + this.apiDetalle + id);
  }
  
}
