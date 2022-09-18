import { Component, OnInit } from '@angular/core';
import {getFirestore, collection, getDocs} from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';
import {CursosService} from '../services/cursos.service';
import {Curso} from '../models/curso';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-grade-register',
  templateUrl: './grade-register.component.html',
  styleUrls: ['./grade-register.component.css']
})
export class GradeRegisterComponent implements OnInit {
  crearCurso: FormGroup;
  colores: any [][];
  constructor(private fb: FormBuilder, private user: UserService, private cursoService: CursosService,
    private router: Router) { 
    this.colores =[]
    this.crearCurso = this.fb.group({
      nombreInstitucion: ['', Validators.required],
      grupo: ['', Validators.required],
      curso: ['',Validators.required],
      fondo: ['',Validators.required]
    })

  }

  ngOnInit(): void {
    this.user.isLogin();
    this.consultColors()
    //this.cursoService.getCursos().subscribe(x => {
      //console.log(x)
    //})
  }

  Graderegister(){
    const idUsuario = this.user.getIdAuth()
    const data: Curso = {
      nombreInstitucion: this.crearCurso.value.nombreInstitucion,
      grupoCurso: this.crearCurso.value.grupo,
      nombreCurso : this.crearCurso.value.curso,
      fondo: this.crearCurso.value.fondo,
      idProfesor: idUsuario,
      estadoCurso: true
    }
    this.cursoService.crearCruso(data).subscribe( x => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se Registro con Exito',
        showConfirmButton: false,
        timer: 2500
      })
      console.log(x)
    },
    error => {
      console.log(error)
    });
    this.router.navigate(['homeAdmi']);
    
  }

  async consultColors(){
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, "colores"));
    querySnapshot.forEach((doc) => {
      this.colores.push([doc.data()['nombre'],doc.data()['url']])
    });
    

  }

}
