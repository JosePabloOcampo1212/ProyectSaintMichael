import { Component, OnInit } from '@angular/core';
import {CursosService} from '../services/cursos.service';
import { Curso2 } from '../models/curso';
import {UserService} from '../services/user.service';
import {Student,Student2} from '../models/student';
import {StudentService} from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  listCursos: Curso2 [];
  constructor(private cursoService: CursosService, private user: UserService) { 
  this.listCursos= []
  console.log(this.listCursos)
  }

  ngOnInit(): void {
    this.user.isLogin();
    const idUsuario = this.user.getIdAuth()
    this.cursoService.getUnCurso(idUsuario).subscribe(x => {
     x.forEach((data) => {
      this.listCursos.push(data)
     })
    })
  }


}
