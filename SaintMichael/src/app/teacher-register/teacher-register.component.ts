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
  data: any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService) { 
      this.registrarUsuario = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['',Validators.required]
      })

      this.data = [
        {
          "hour": "07:00 am",
          "availability": ["N","N","N","N","N","N","N"]
      },
        {
          "hour": "07:30 am",
          "availability": ["N","N","N","N","N","N","N"]
      },
        {
          "hour": "08:00 am",
          "availability": ["N","N","N","N","N","N","N"]
      },
        {
          "hour": "08:30 am",
          "availability": ["N","N","N","N","N","N","N"]
      },
        {
            "hour": "09:00 am",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "09:30 am",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "10:00 am",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "10:30 am",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "11:00 am",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "11:30 am",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "12:00 am",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "12:30 am",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "13:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "13:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "14:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "14:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "15:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "15:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "16:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "16:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "17:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "17:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "18:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "18:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "19:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "19:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "20:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "20:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "21:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "21:30 pm",
            "availability": ["N","N","N","N","N","N","N"]
        },
        {
            "hour": "22:00 pm",
            "availability": ["N","N","N","N","N","N","N"]
        }
    ]

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
      await setDoc(doc(db, "Users", response.user.uid), {nombre: name, email: email, admin: false,id:response.user.uid });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se Registro con Exito',
        showConfirmButton: false,
        timer: 2500
      })
      //----------------------------------------------new register timeUse------------------------------------------------------
      await setDoc(doc(db, "Horarios", response.user.uid), { id:response.user.uid, data: this.data });
      this.router.navigate(['homeAdmi'])
    }
  )
  .catch(error => {
    console.log(error)
  })
  console.log(this.registrarUsuario.value.name, this.registrarUsuario.value.email, this.registrarUsuario.value.password)
}



}
