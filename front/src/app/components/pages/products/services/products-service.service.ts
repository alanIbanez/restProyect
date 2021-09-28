import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "https://localhost:44361/";
  api = "api/Plato/";
  constructor(private http: HttpClient) { }

  getListarPlatos(): Observable<any>{
    return this.http.get(this.url + this.api);
  }
  savePlato(plato: any): Observable<any>{
    return this.http.post(this.url + this.api, plato);  
  }
  updatePlato(id: number, plato: any): Observable<any>{
    return this.http.put(this.url + this.api + id, plato);
  }
  deletePlato(id: number): Observable<any>{
    return this.http.delete(this.url + this.api + id);
  }
}
