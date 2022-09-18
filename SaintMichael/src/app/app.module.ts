import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { NavAmdmiComponent } from './nav-amdmi/nav-amdmi.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EstudentRegisterComponent } from './estudent-register/estudent-register.component';
import { GradeRegisterComponent } from './grade-register/grade-register.component';
import {CursosService} from './services/cursos.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ProfileComponent } from './profile/profile.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherRegisterComponent,
    NavAmdmiComponent,
    HomeAdminComponent,
    EstudentRegisterComponent,
    GradeRegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    AngularFireAuthModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
