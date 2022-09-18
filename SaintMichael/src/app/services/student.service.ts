import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student,Student2} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getStudents(){
      console.log('entre')
  }

  createStudent(student: Student){
    return this.http.post(`${this.API_URI}/student`, student)
  }
}
