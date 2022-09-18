import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TeacherRegisterComponent} from './teacher-register/teacher-register.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {EstudentRegisterComponent} from './estudent-register/estudent-register.component';
import {GradeRegisterComponent} from './grade-register/grade-register.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: '' , redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'homeAdmi', component: HomeAdminComponent},
  {path: 'teacher-register', component: TeacherRegisterComponent},
  {path: 'estudent-register', component: EstudentRegisterComponent},
  {path: 'gradeRegister', component: GradeRegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**',redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
