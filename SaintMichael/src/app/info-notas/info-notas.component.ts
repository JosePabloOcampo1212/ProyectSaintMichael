import { Component, OnInit } from '@angular/core';
import {IdEstudianteHomeService} from '../services/id-estudiante-home.service';
import { CursoDataService } from '../services/curso-data.service';
import {Calificaciones} from '../models/calificaciones';
import {CalificacionService} from '../services/calificacion.service';
import {Evaluacion2} from '../models/evaluacion';
import {EvaluacionService} from '../services/evaluacion.service';

@Component({
  selector: 'app-info-notas',
  templateUrl: './info-notas.component.html',
  styleUrls: ['./info-notas.component.css']
})
export class InfoNotasComponent implements OnInit {

  examenes: Calificaciones[];
  quices: Calificaciones[];
  tareas: Calificaciones[];
  proyectos: Calificaciones[];
  cotidianos: Calificaciones[];
  evaluacion: Evaluacion2[];
  exam: number = 0;
  quiz: number = 0;
  tarea: number = 0;
  proyec: number = 0;
  cotidi: number = 0;
  constructor(private evaluService: EvaluacionService, private idEstudianteService: IdEstudianteHomeService,private cursoData: CursoDataService, private califiService: CalificacionService) { 
    this.examenes=[];
    this.quices=[];
    this.tareas=[];
    this.proyectos=[];
    this.cotidianos=[];
    this.evaluacion =[];
    this.getEvaluacion();
    this.getCalificaciones();
   
  }

  ngOnInit(): void {
  }

  getEvaluacion(){
    this.evaluService.getEvaluById(this.cursoData.idCurso).subscribe(x =>{
      x.forEach((data) => {
        this.evaluacion.push(data);
      })
    })
  }

  calcularProExamenes(){
    if (this.examenes.length != 0) {
      var sumaNotas = 0;
      this.examenes.forEach((data)=>{
        sumaNotas += data.calificacion;
      })
      this.exam = (sumaNotas/this.examenes.length) * (this.evaluacion[0].examen / 100);
    } else {
      this.exam = this.evaluacion[0].examen;
    }
  }

  calcularProQuices(){
    if (this.quices.length != 0) {
      var sumaNotas = 0;
      this.quices.forEach((data)=>{
        sumaNotas += data.calificacion;
      })
      this.quiz = (sumaNotas/this.quices.length) * (this.evaluacion[0].quiz / 100);
    } else {
      this.quiz = this.evaluacion[0].quiz;
    }
  }

  calcularProTareas(){
    if (this.tareas.length != 0) {
      var sumaNotas = 0;
      this.tareas.forEach((data)=>{
        sumaNotas += data.calificacion;
      })
      this.tarea = (sumaNotas/this.tareas.length) * (this.evaluacion[0].tarea / 100);
    } else {
      this.tarea = this.evaluacion[0].tarea;
    }
  }

  calcularProProyectos(){
    if (this.proyectos.length != 0) {
      var sumaNotas = 0;
      this.proyectos.forEach((data)=>{
        sumaNotas += data.calificacion;
      })
      this.proyec = (sumaNotas/this.proyectos.length) * (this.evaluacion[0].proyecto / 100);
    } else {
      this.proyec = this.evaluacion[0].proyecto;
    }
  }

  calcularProCotidianos(){
    if (this.cotidianos.length != 0) {
      var sumaNotas = 0;
      this.cotidianos.forEach((data)=>{
        sumaNotas += data.calificacion;
      })
      this.cotidi = (sumaNotas/this.cotidianos.length) * (this.evaluacion[0].cotidiano / 100);
    } else {
      this.cotidi = this.evaluacion[0].cotidiano;
    }
  }




  getCalificaciones(){
    this.califiService.getCalificacionesById(this.idEstudianteService.idEstudianteActual).subscribe(x =>{
        x.forEach((data) => {
          if(data.tipoEvaluacion == 1){
            this.examenes.push(data)
          }else{
            if (data.tipoEvaluacion == 2) {
              this.quices.push(data)
            } else {
              if (data.tipoEvaluacion == 3) {
                this.tareas.push(data)
              } else {
                if (data.tipoEvaluacion == 4) {
                  this.proyectos.push(data)
                } else {
                  if(data.tipoEvaluacion == 5){
                    this.cotidianos.push(data)
                  }
                }
              }
            }
          }
        })

    
        this.calcularProExamenes();
        this.calcularProQuices();
        this.calcularProTareas();
        this.calcularProProyectos();
        this.calcularProCotidianos();
    })
  }



}
