import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  infoLogin : FormGroup;

  constructor(private userService: UserService,
    private router: Router) {
    this.infoLogin = new FormGroup({
      email : new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.login(this.infoLogin.value).then(
      response => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Inicio de Sesion',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigate(['homeAdmi'])

      } 
    ).catch(
      error => {

        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Su Usuario o Contraseña es Incorrecta',
          showConfirmButton: false,
          timer: 2500
        })

        console.log(error)
      }
    )
  }

}
