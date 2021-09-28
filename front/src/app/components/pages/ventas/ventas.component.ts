import { Component, OnInit } from '@angular/core';
import { Details, Orden } from '../../shared/interfaces/order.interface';
import { DataService } from '../../shared/services/data-service.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(private dataSvc: DataService) { }
  ventas!: Orden[];
  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.dataSvc.getListarOrden().subscribe(res=>{
      this.ventas = res, console.log(this.ventas)});
  }

}
