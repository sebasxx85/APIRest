import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  formularioAutos!: FormGroup;
  autos: any[]= [];

  constructor(
    private service: UsuariosService
  ) {
    this.formularioAutos = new FormGroup({
      nombreAuto: new FormControl('',[Validators.required]),
      Patente: new FormControl('',[Validators.required]),
  })
  }

  //metodo agregar auto
  agregarAutos(){
    console.log(this.agregarAutos); //pongo esto para ver que sea invalida la PUnitaria
    
    this.autos.push(this.formularioAutos.value)
  }


  ngOnInit(): void {
    this.service.obtenerUsuarios().subscribe(console.log);
    
  }

}
