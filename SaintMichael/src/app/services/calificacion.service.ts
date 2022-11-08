import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Calificaciones,Calificaciones2} from '../models/calificaciones';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getCalificacionesById(id: number): Observable<Calificaciones2[]>{
    return this.http.get<Calificaciones2[]>(`${this.API_URI}/calificaciones/${id}`)

  }

  crearCalificaciones(califica : Calificaciones){
    return this.http.post(`${this.API_URI}/calificaciones`, califica)
  }

}
