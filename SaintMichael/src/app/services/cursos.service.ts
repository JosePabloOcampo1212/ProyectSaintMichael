import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Curso, Curso2} from '../models/curso'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso2[]>{
    return this.http.get<Curso2[]>(`${this.API_URI}/curse`)
  }

  getUnCurso(id: string): Observable<Curso2[]>{
    return this.http.get<Curso2[]>(`${this.API_URI}/curse/${id}`)
  }


  crearCruso(curso : Curso){
    return this.http.post(`${this.API_URI}/curse`, curso)
  }
}
