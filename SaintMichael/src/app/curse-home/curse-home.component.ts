import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {Student,Student2,StudentSimpli} from '../models/student';
import { CursoDataService } from '../services/curso-data.service';
import {StudentService} from '../services/student.service';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {IdCursoActualService} from '../services/id-curso-actual.service';
import {IdEstudianteHomeService} from '../services/id-estudiante-home.service';
import {Evaluacion,Evaluacion2} from '../models/evaluacion';
import {EvaluacionService} from '../services/evaluacion.service';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {CursosService} from '../services/cursos.service';




@Component({
  selector: 'app-curse-home',
  templateUrl: './curse-home.component.html',
  styleUrls: ['./curse-home.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CurseHomeComponent implements OnInit {
  listStudent: StudentSimpli[];
  nombreInstitucion: any;
  grupoCurso: any ;
  nombreCurso: any ;
  idCurso: any ;
  closeResult = '';
  dates: FormGroup;
  idEstudent: FormGroup;
  evaluaciones: FormGroup;
  constructor(private cursoService: CursosService, private studentService: StudentService, private evalu:EvaluacionService,
    private router: Router, private userService: UserService, private cursoData: CursoDataService,private modalService: NgbModal,private fb: FormBuilder, private idCursoService: IdCursoActualService, private idEstudianteService: IdEstudianteHomeService,config: NgbModalConfig) {
      this.dates = this.fb.group({
        date: ['', Validators.required]
      })
      this.idEstudent = this.fb.group({
        idEstu:['', Validators.required]
      })
      this.evaluaciones = this.fb.group({
        examenes:['', Validators.required],
        quices:['', Validators.required],
        tareas:['', Validators.required],
        proyectos:['', Validators.required],
        cotidiano:['', Validators.required]
      })
      this.nombreCurso = this.cursoData.nombreCurso;
      this.nombreInstitucion = this.cursoData.nombreInstitucion;
      this.grupoCurso = this.cursoData.grupoCurso;
      this.idCurso = this.cursoData.idCurso;
      this.listStudent =[];
      config.backdrop = 'static';
		  config.keyboard = false;
    
   }

  ngOnInit(): void {
    this.getStudentCurse();
  }

  checkFiles(){
    this.router.navigate(['filesCheck']);
  }

  uploadDocument($event:any){
    const file = $event.target.files[0];
    const storage = getStorage();
    const curso = String(this.idCurso);
    const storageRef = ref(storage, `programasDeCurso/${curso}/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded File');
    })
    .catch(x =>{
      console.log(x)
    });

  }

  goEstudent(){
    this.idEstudianteService.idEstudianteActual = this.idEstudent.value.idEstu;
    this.router.navigate(['home-student']);
  }

  getStudentCurse(){
  
    this.studentService.getStudentsCurse(this.idCurso).subscribe(x => {
      x.forEach((data) => {
       this.listStudent.push(data)
      })
     })
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  asistenciaHistoria(){
    this.idCursoService.idCursoActual = this.idCurso;
    this.router.navigate(['asistencia-check']);
  }

  open2(content: any) {
		this.modalService.open(content);
	}

  pt(){
    const examens: number = +this.evaluaciones.value.examenes;
    const quices: number = +this.evaluaciones.value.quices;
    const tareas: number = +this.evaluaciones.value.tareas;
    const proyectos: number = +this.evaluaciones.value.proyectos;
    const cotidiano: number = +this.evaluaciones.value.cotidiano;
    const evalua : Evaluacion = {
      idCurso: this.idCurso,
		  examen: examens,
		  quiz: quices,
		  tarea: tareas,
		  proyecto: proyectos,
		  cotidiano: cotidiano
    }
    this.evalu.crearEvaluacion(evalua).subscribe(x => {
      console.log(x)
    })


  }

  updateCurso(){
    this.cursoService.updateCurso(this.idCurso).subscribe(x =>{
      console.log(x)
      this.router.navigate(['homeAdmi']);
    })
  }


}
