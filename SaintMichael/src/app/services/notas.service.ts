import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Notas2,Notas} from '../models/notas'

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotasService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  crearNotas(nota : Notas){
    return this.http.post(`${this.API_URI}/notas`, nota)
  }

  getNotasByStudent(id: number): Observable<Notas2[]>{
    return this.http.get<Notas2[]>(`${this.API_URI}/notas/${id}`)

  }

}
