import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {asistencia, asistencia2} from '../models/asistencia'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

crearAsistencia(info: asistencia){
  console.log(info)
  return this.http.post(`${this.API_URI}/asistencia`, info)
}

getAsistencias(fecha: string): Observable<asistencia2[]>{
  return this.http.get<asistencia2[]>(`${this.API_URI}/asistencia/${fecha}`)
}

}
