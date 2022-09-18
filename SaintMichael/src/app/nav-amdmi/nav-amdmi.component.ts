import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {getFirestore, collection, getDocs} from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-amdmi',
  templateUrl: './nav-amdmi.component.html',
  styleUrls: ['./nav-amdmi.component.css']
})
export class NavAmdmiComponent implements OnInit {
  estado: any;
  constructor(private router: Router, private user : UserService) { }


  ngOnInit() {
    this.isAdmin()
  }

 goHome(){
  this.router.navigate(['homeAdmi']);
 }

 goRegisterTeacher(){
  this.router.navigate(['teacher-register']);
 }

 goRegisterEstudent(){
  this.router.navigate(['estudent-register']);
 }
 goCreateGrade(){
  this.router.navigate(['gradeRegister']);
 }
 goProfile(){
  this.router.navigate(['profile']);
 }
 signOut(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Sesion Cerrada',
    showConfirmButton: false,
    timer: 2500
  })
  this.user.signOut()
 }

 async isAdmin(){
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      if(this.user.getIdAuth() == doc.data()['id']){
        this.estado = doc.data()['admin'];
      }
    });
    
 }
 
}
