import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {NotasService} from '../services/notas.service';
import {Notas,Notas2} from '../models/notas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CalificacionService} from '../services/calificacion.service';
import {Calificaciones} from '../models/calificaciones';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.component.html',
  styleUrls: ['./info-student.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class InfoStudentComponent implements OnInit,OnChanges {
  @Input()  idEstudiante: any;
  @Input() nombre: any;
  @Input() telefono: any;
  @Input() seccion: any;
  @Input() aprendizaje: any;
  closeResult = '';
  notas: Notas2[];
  newNota: FormGroup;
  newCalificacion: FormGroup;
  constructor(private calificacionSevice: CalificacionService, private modalService: NgbModal, private notasService: NotasService,private fb: FormBuilder,config: NgbModalConfig) { 
    this.notas = [];
    this.newNota = this.fb.group({
      info: ['', Validators.required]
    })
    this.newCalificacion = this.fb.group({
      evaluacion: ['', Validators.required],
      nota: ['', Validators.required]

    })
    config.backdrop = 'static';
		config.keyboard = false;

  }

  ngOnInit(): void {
  }

  createCalificacion(){
    const evaluacion: number = +this.newCalificacion.value.evaluacion;
    const nota: number = +this.newCalificacion.value.nota;
    const califi: Calificaciones = {
      idEstudiante: this.idEstudiante ,
      tipoEvaluacion: evaluacion,
      calificacion: nota
    }
    this.calificacionSevice.crearCalificaciones(califi).subscribe(x =>{
      console.log(x)
    })
  }


  ngOnChanges(changes: SimpleChanges) {
    this.getNotas();
  }

  open2(content: any) {
		this.modalService.open(content);
	}

  getNotas(){
    this.notas = [];
    this.notasService.getNotasByStudent(this.idEstudiante).subscribe(x => {
      x.forEach(data => {
        this.notas.push(data);
      });
    })
  }

  createNote(){
    const nota: Notas = {
      idEstudiante: this.idEstudiante ,
      info: this.newNota.value.info
    }
    this.notasService.crearNotas(nota).subscribe(x=>{
      console.log(x)
      this.getNotas();
    })
  }

  
	open(content: any) {
		this.modalService.open(content, { size:"lg" }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
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



}
