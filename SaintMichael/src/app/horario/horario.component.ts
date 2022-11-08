import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {getFirestore, collection, getDocs, doc, setDoc} from '@angular/fire/firestore';



@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  public show: boolean = true;
  public data: any;
  editable = true;
  constructor(private user: UserService) { 
    this.getHorario();
  }

  ngOnInit(): void {
  }

  async getHorario(){
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, "Horarios"));
    querySnapshot.forEach((doc) => {
      if(this.user.getIdAuth() == doc.data()['id']){
        this.data = doc.data()['data']
    
      }
    });
  }

  changeAv(hour :any,indexHour :any){    
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].hour === hour) {
        if (this.data[index].availability[indexHour] === 'L') {
          this.data[index].availability[indexHour] = 'O';
        } else {
          if (this.data[index].availability[indexHour] === 'N') {
            this.data[index].availability[indexHour] = 'L';
          } else {
            if (this.data[index].availability[indexHour] === 'O') {
              this.data[index].availability[indexHour] = 'N';
            }
          }
          
        }

      }

      
    }
    
  }

  async saveHorario(){
    const db = getFirestore();
    const uid = String(this.user.getIdAuth());
    await setDoc(doc(db, "Horarios/", uid), { id:uid, data: this.data });
  }

}
