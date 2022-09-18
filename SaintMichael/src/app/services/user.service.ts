import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, authState, getAuth, updatePassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Injectable({
    providedIn :  'root'
})

export class UserService{


    constructor(private auth: Auth,private router: Router){
      
    }

register({email, password} : any){
    console.log(email,password)
    return createUserWithEmailAndPassword(this.auth, email, password)
}

login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email,password)
}

getIdAuth(): string {
    const auth = getAuth();
    const user = auth.currentUser!;
    const uid = user.uid;
    return uid
}

updatePassword(password : string): any{
  
    const auth = getAuth();
    const user: any = auth.currentUser;
    const newPassword = password;
    updatePassword(user, newPassword).then(() => {
        this.router.navigate(['login']);
      }).catch((error) => {
        console.log(error)
        return false
        // An error ocurred
        // ...
      });
}

signOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      console.log('Cerro sesion')
    }).catch((error) => {
      console.log(error)
  // An error happened.
    });
}

isLogin(){
  const auth = getAuth();
  authState(auth).subscribe(x =>{
    if(x == null){
      this.router.navigate(['login']);
    }
  })

}




}