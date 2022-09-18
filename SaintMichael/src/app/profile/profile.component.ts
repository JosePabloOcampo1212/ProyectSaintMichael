import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {getFirestore, collection, getDocs} from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  passwords: FormGroup;
  nombre: any;
  email: any;
  constructor(private fb: FormBuilder, private user: UserService, private router: Router) { 
    this.passwords = this.fb.group({
      password: ['', Validators.required],
      Vpassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.user.isLogin()
    this.getInformation()
  }

  updatePassword(){
    const password: any= this.passwords.value.password
    const checkPassword: any = this.passwords.value.Vpassword 
    if (password == checkPassword){
      this.user.updatePassword(password)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Contraseña Actualizada',
        showConfirmButton: false,
        timer: 2500
      })
      this.router.navigate(['login']);
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Las Contraseñas no Coinciden',
        showConfirmButton: false,
        timer: 2500
      })
    }

  }

  async getInformation(){
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      if(this.user.getIdAuth() == doc.data()['id']){
        this.nombre = doc.data()['nombre'];
        this.email = doc.data()['email'];
        console.log(this.email)
        console.log(this.nombre)
      }
    });
  }


}
