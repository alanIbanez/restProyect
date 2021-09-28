import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {PlatoService} from 'src/app/components/pages/platos/services/plato.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {
  listPlatos: any[] = [];
  accion = "Agregar";
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private platoSvc: PlatoService) { 
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      costo:['',[Validators.required, Validators.maxLength(2), Validators.minLength(1)]]
    })
  }
  
  ngOnInit(): void {
    this.obtenerPlatos();
  }

  obtenerPlatos(){
    this.platoSvc.getListarPlatos().subscribe(resp => {
      console.log(resp);
      this.listPlatos = resp;
    }, error => {
      console.log(error);
    });
  }


  guardarPlato(){

    const plato: any = {
      nombre : this.form.get('nombre')?.value,
      costo : this.form.get('costo')?.value
    }
    if(this.id == undefined){
      //registramos
      this.platoSvc.savePlato(plato).subscribe( resp => {
        this.toastr.success('Exito!', 'Plato registrado!');
        this.obtenerPlatos();
        this.form.reset();
      }, error => {
        this.toastr.error('Ocurrio un error!', 'El plato no fue registrado!');
        console.log(error);
      })
    }else{
      //editamos
      plato.id = this.id;
      this.platoSvc.updatePlato(this.id, plato).subscribe( resp => {
        this.form.reset();
        this.accion = "Agregar";
        this.id = undefined;
        this.toastr.info('Actualizado!', 'Plato actualizado!');
        this.obtenerPlatos();
      }, error => {
        this.toastr.info('Error!', 'Plato no actualizado!');
      });
    }
   
     
  }

  editarPlato (plato: any){
    this.accion = "Editar";
    this.id = plato.id;

    this.form.patchValue({
      nombre: plato.nombre,
      costo: plato.costo
    })
  }

  eliminarPlato(id: number){
    //console.log(index);
    this.platoSvc.deletePlato(id).subscribe(resp => {
      this.toastr.error('Borrado!', 'Plato eliminado!');
      this.obtenerPlatos();
    }, error => {
      console.log(error);
    });
    //this.listPlatos.splice(id, 1);
    
  }

}
