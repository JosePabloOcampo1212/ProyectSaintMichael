import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdEstudianteHomeService {
  idEstudianteActual: number = 0;
  constructor() { }
}
