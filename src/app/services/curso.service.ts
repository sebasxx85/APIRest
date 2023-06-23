import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
     private http: HttpClient
  ) {

  }


  obtenerCursos(): Observable<Curso[]> {
    //lo que retorna esta API es un observable y hay que tratarlo como las clases anteriores.
    return this.http.get<Curso[]>('https://64953135b08e17c91791b6e6.mockapi.io/cursos')
  }

 // obtenerCurso(id: number): Observable<Curso[]> {}


  agregarCurso(curso: Curso) {

  }

  editarCurso(curso: Curso) {

  }

  eliminarCurso(id: number) {

  }


}