import { Component, Input, OnInit } from '@angular/core';
import {AsistenciaService} from '../services/asistencia.service';
import {asistencia} from '../models/asistencia'

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  @Input() nombre: any;
  showDelete:boolean =true;
  @Input() idCurso: any;
  @Input() idEstudiante:any;
  @Input() fecha:any;
  constructor(private asis : AsistenciaService ) { }

  ngOnInit(): void {
  }

  destroy(){
    this.showDelete = false;
  }

  guardarAsistencia(){
    var fecha = String(this.fecha.day)+"-"+String(this.fecha.month)+"-"+String(this.fecha.year)
    const data: asistencia = {
      idEstudiante: this.idEstudiante,
      idCurso: this.idCurso,
      fecha: fecha,
      nombreEstudiante:this.nombre
    }
    this.asis.crearAsistencia(data).subscribe(x =>{
      console.log(x)
    });
    this.showDelete = false;
  }


}
