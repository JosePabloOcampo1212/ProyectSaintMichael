import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CursosService} from '../services/cursos.service';
import { Curso2 } from '../models/curso';
import {UserService} from '../services/user.service';
import {Student,Student2} from '../models/student';
import {StudentService} from '../services/student.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-estudent-register',
  templateUrl: './estudent-register.component.html',
  styleUrls: ['./estudent-register.component.css']
})
export class EstudentRegisterComponent implements OnInit {
  listCursos: Curso2 [];
  registrarEstudiante: FormGroup;
  constructor(private fb: FormBuilder, private cursoService: CursosService, private user: UserService, private studentService: StudentService,
    private router: Router, private userService: UserService) {
    this.listCursos= []
    this.registrarEstudiante = this.fb.group({
      nombre: ['', Validators.required],
      intitucion: ['', Validators.required],
      telefono: ['',Validators.required],
      seccion: ['',Validators.required],
      curso: ['',Validators.required]
    })
    this.getCurso()
   }

  ngOnInit(): void {
    this.userService.isLogin();
  }

  register(){
    const data: Student = {
      nombre: this.registrarEstudiante.value.nombre,
      Institucion: this.registrarEstudiante.value.intitucion,
      telefono : this.registrarEstudiante.value.telefono,
      seccion: this.registrarEstudiante.value.seccion,
      idCurso: this.registrarEstudiante.value.curso
    }
    
   this.studentService.createStudent(data).subscribe(x => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se Registro con Exito',
      showConfirmButton: false,
      timer: 2500
    })
    this.router.navigate(['homeAdmi'])
    console.log(x)
   })
  }

  getCurso(){
    const idUsuario = this.user.getIdAuth()
    this.cursoService.getUnCurso(idUsuario).subscribe(x => {
      console.log(x)
     x.forEach((data) => {
      this.listCursos.push(data)
     })
    })
    
  }

}
