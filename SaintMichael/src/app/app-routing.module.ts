import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TeacherRegisterComponent} from './teacher-register/teacher-register.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {EstudentRegisterComponent} from './estudent-register/estudent-register.component';
import {GradeRegisterComponent} from './grade-register/grade-register.component';
import {ProfileComponent} from './profile/profile.component';
import {CurseHomeComponent} from './curse-home/curse-home.component';
import {AsistenciaCheckComponent} from './asistencia-check/asistencia-check.component';
import {HomeStudentComponent} from './home-student/home-student.component';
import {FilesCheckComponent} from './files-check/files-check.component';
import {HorarioComponent}from './horario/horario.component';

const routes: Routes = [
  {path: '' , redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'homeAdmi', component: HomeAdminComponent},
  {path:'curseHome', component: CurseHomeComponent },
  {path: 'teacher-register', component: TeacherRegisterComponent},
  {path: 'estudent-register', component: EstudentRegisterComponent},
  {path: 'gradeRegister', component: GradeRegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'asistencia-check', component: AsistenciaCheckComponent},
  {path: 'home-student', component: HomeStudentComponent},
  {path: 'filesCheck', component: FilesCheckComponent},
  {path: 'horario', component: HorarioComponent},
  {path: '**',redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
