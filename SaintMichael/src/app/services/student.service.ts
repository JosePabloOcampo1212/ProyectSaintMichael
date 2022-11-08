import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student,Student2, StudentSimpli} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getStudentsCurse(id: number): Observable<StudentSimpli[]>{
      return this.http.get<StudentSimpli[]>(`${this.API_URI}/student/${id}`);
  }

  createStudent(student: Student){
    return this.http.post(`${this.API_URI}/student`, student)
  }

  getOneStudent(id: number): Observable<Student2[]>{
    return this.http.get<Student2[]>(`${this.API_URI}/student/one/${id}`);
  }
}
