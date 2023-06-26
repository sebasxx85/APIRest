import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  //guardando la url en una constante
  urlapi: string = 'https://64953135b08e17c91791b6e6.mockapi.io/cursos';

  constructor(
     private http: HttpClient
  ) {
}
  //obtener arreglo de cursos
  obtenerCursos(): Observable<Curso[]> {
    //lo que retorna esta API es un observable y hay que tratarlo como las clases anteriores.
    return this.http.get<Curso[]>(`this.urlapi`,{
      headers: new HttpHeaders({
        'content-type': 'aplication/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  //obtener cursos por id
  obtenerCurso(id: number): Observable<Curso[]> {
    //lo que retorna esta API es un observable y hay que tratarlo como las clases anteriores.
    return this.http.get<Curso[]>(`this.urlapi/${id}`,{
      headers: new HttpHeaders({
        'content-type': 'aplication/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

 // obtenerCurso(id: number): Observable<Curso[]> {}
  agregarCurso(curso: Curso) {
    return this.http.post<Curso[]>(`this.urlapi`, curso,{
      headers: new HttpHeaders({
        'content-type': 'aplication/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  editarCurso(curso: Curso) {
    //no se actualiza la api cuando edito el curso por lo que tengo que subscribirme
      this.http.put<Curso>(`this.urlapi/${curso.id}`, curso).pipe(
        catchError(this.manejarError)
      ).subscribe    
  }

  eliminarCurso(id: number) {
    this.http.delete<Curso>(`this.urlapi/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe
    alert("registro eliminado")
  }

  private manejarError(error: HttpErrorResponse ){
      if (error.error instanceof ErrorEvent) {
        console.warn("error del lado del cliente", error.error.message);         
      } else {
        console.warn("error del lado del servidor", error.error.message);
      }

      return throwError(() => new Error('Error en la comunicacion de HTTP'));
      

  }


}