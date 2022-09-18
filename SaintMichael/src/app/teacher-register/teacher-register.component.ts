import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {getFirestore, doc, setDoc} from '@angular/fire/firestore';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {
  registrarUsuario: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService) { 
      this.registrarUsuario = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['',Validators.required]
      })
    }

  ngOnInit(): void {
    this.userService.isLogin();
  }
  
register(){
  const db = getFirestore()
  const name = this.registrarUsuario.value.name;
  const email = this.registrarUsuario.value.email;
  const password = this.registrarUsuario.value.password
  this.userService.register({email: email ,password: password})
  .then(
    async response => {
      console.log("aqui comienza")
      await setDoc(doc(db, "Users", response.user.uid), {nombre: name, email: email, admin: false,id:response.user.uid });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se Registro con Exito',
        showConfirmButton: false,
        timer: 2500
      })
      this.router.navigate(['homeAdmi'])
    }
  )
  .catch(error => {
    console.log(error)
  })
  console.log(this.registrarUsuario.value.name, this.registrarUsuario.value.email, this.registrarUsuario.value.password)
}



}
