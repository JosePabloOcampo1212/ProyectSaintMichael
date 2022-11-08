import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AsistenciaService } from '../services/asistencia.service';
import {IdCursoActualService} from '../services/id-curso-actual.service';
import {asistencia2} from '../models/asistencia';

@Component({
  selector: 'app-asistencia-check',
  templateUrl: './asistencia-check.component.html',
  styleUrls: ['./asistencia-check.component.css']
})
export class AsistenciaCheckComponent implements OnInit {
  date: FormGroup;
  listaAsistencia: asistencia2[];
  constructor(private fb: FormBuilder, private asis: AsistenciaService, private idCursoService: IdCursoActualService) {
    this.date = this.fb.group({
      date: ['', Validators.required]
    })
    this.listaAsistencia = [];
   }

  ngOnInit(): void {
  }

  consulata(){
    this.listaAsistencia = [];
    const fecha = String(this.date.value.date.day)+"-"+String(this.date.value.date.month)+"-"+String(this.date.value.date.year)
    this.asis.getAsistencias(fecha).subscribe(x => {
      x.forEach((data) => {

       if(this.idCursoService.idCursoActual == data.idCurso){
          this.listaAsistencia.push(data)
       }

      })
     })
  }
  

}
