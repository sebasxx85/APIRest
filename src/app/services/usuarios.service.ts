import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient

  ) { }

  obtenerUsuarios(){
    return this.http.get("urlapi: string = 'https://64953135b08e17c91791b6e6.mockapi.io/cursos';")

  }
}
