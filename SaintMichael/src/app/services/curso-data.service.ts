import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursoDataService {
  nombreInstitucion: string = "";
  grupoCurso: string = "";
  nombreCurso: string = "";
  idCurso: number = 0;

  constructor() { }
}

