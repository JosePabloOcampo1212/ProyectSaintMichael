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
import { CurseHomeComponent } from './curse-home/curse-home.component';
import { CurseComponent } from './curse/curse.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { AsistenciaCheckComponent } from './asistencia-check/asistencia-check.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { InfoStudentComponent } from './info-student/info-student.component';
import { InfoNotasComponent } from './info-notas/info-notas.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FilesCheckComponent } from './files-check/files-check.component';
import { HorarioComponent } from './horario/horario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherRegisterComponent,
    NavAmdmiComponent,
    HomeAdminComponent,
    EstudentRegisterComponent,
    GradeRegisterComponent,
    ProfileComponent,
    CurseHomeComponent,
    CurseComponent,
    AsistenciaComponent,
    AsistenciaCheckComponent,
    HomeStudentComponent,
    InfoStudentComponent,
    InfoNotasComponent,
    FilesCheckComponent,
    HorarioComponent
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
    MdbCheckboxModule,
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
