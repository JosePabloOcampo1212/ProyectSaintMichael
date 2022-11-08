import { Component, OnInit,Input} from '@angular/core';
import {  Router } from '@angular/router';
import { CursoDataService } from '../services/curso-data.service';
import {CursosService} from '../services/cursos.service';


@Component({
  selector: 'app-curse',
  templateUrl: './curse.component.html',
  styleUrls: ['./curse.component.css']
})
export class CurseComponent implements OnInit {
   @Input() idCurso: any;
   @Input() nombreInstitucion: any;
   @Input() grupoCurso: any ;
   @Input() nombreCurso: any ;
   @Input() fondo: any ;
   @Input() idProfesor: any ;
   @Input() estadoCurso: any ;
    
  constructor(private cursoService: CursosService, private cursoData: CursoDataService, private routers: Router) {
    
   }

  ngOnInit(): void {
  }


  cursoHome(){
    this.cursoData.idCurso = this.idCurso;
    this.cursoData.nombreCurso = this.nombreCurso;
    this.cursoData.grupoCurso = this.grupoCurso;
    this.cursoData.nombreInstitucion = this.nombreInstitucion;
    this.routers.navigate(['curseHome']);
    
  }



}
