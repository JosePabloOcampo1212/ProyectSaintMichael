import { Component, OnInit } from '@angular/core';
import { Student2 } from '../models/student';
import {IdEstudianteHomeService} from '../services/id-estudiante-home.service';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css']
})
export class HomeStudentComponent implements OnInit {
  student: Student2[];
  constructor(private idEstudianteService: IdEstudianteHomeService, private studentService: StudentService) { 
    this.getEstudiante();
    this.student = [];

  }

  ngOnInit(): void {
  }

  getEstudiante(){
    const id = this.idEstudianteService.idEstudianteActual;
    console.log(id)
    this.studentService.getOneStudent(id).subscribe(x =>{
      x.forEach((data) => {
        this.student.push(data);
       })
    })
  }

}
