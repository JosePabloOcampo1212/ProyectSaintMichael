import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import{Evaluacion,Evaluacion2}from '../models/evaluacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getEvaluById(id: number): Observable<Evaluacion2[]>{
    return this.http.get<Evaluacion2[]>(`${this.API_URI}/evaluCurso/${id}`)

  }

  crearEvaluacion(evalu : Evaluacion){
    return this.http.post(`${this.API_URI}/evaluCurso`, evalu)
  }

}
