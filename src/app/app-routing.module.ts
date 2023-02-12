import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotosListComponent } from './components/cmpt1-land/photos-list.component'
import { LoginComponent } from './components/cmpt5-login/login.component';
import { PhotoPreviewComponent } from './components/cmpt7-curse-preview/curse-preview.component'
import { UserPreviewComponent } from './components/cmpt4-user-preview/user-preview.component';
import { UserComponent } from './components/cmpt3-user-register/user.component';
import { LandComponent } from "./components/cmpt2-users/land.component";
import { AsignatureComponent } from "./components/cmpt6-curse/asignature.component";
import { TasksComponent } from "./components/cmpt11-tasks/tasks.component";

import { ThemePreviewComponent } from './components/cmpt10-theme-preview/theme-preview.component'
import { UnityPreviewComponent } from './components/cmpt9-unity-preview/unity-preview.component'
import { TaskPreviewComponent } from './components/cmpt12-task-preview/task-preview.component'
import { UsersCurseComponent } from './components/cmpt8-integer/integer.component'
import { FileComponent } from './components/cmpt13-file/file.component'

import { Cmpt14MVComponent } from './components/cmpt14-mv/cmpt14-mv.component';
import { Cmpt19EDUCACIONComponent } from './components/cmpt19-educacion/cmpt19-educacion.component';
import { Cmpt20APPComponent } from './components/cmpt20-ap-p/cmpt20-ap-p.component';
import { Cmpt23TESISComponent } from './components/cmpt23-tesis/cmpt23-tesis.component';
import { Cmpt22APEComponent } from './components/cmpt22-ap-e/cmpt22-ap-e.component';
import { Cmpt25ADMISIONComponent } from './components/cmpt25-admision/cmpt25-admision.component';

const routes: Routes = [
  { path: 'projects', component: Cmpt19EDUCACIONComponent },
  { path: 'Cmpt14MVComponent', component: Cmpt14MVComponent },
  { path: 'sub_projects/:id', component: Cmpt20APPComponent },
  { path: 'expositions', component: Cmpt23TESISComponent },
  { path: 'sub_expositions/:id', component: Cmpt22APEComponent },
  { path: 'texts', component: Cmpt25ADMISIONComponent },
  { path: 'file/:iduser', component: FileComponent },
  { path: 'curso/:idcurso', component: AsignatureComponent },
  { path: 'integers/:idcurso', component: UsersCurseComponent },
  { path:'task/:idtask', component: TaskPreviewComponent },
  { path: 'theme/:idtheme', component: ThemePreviewComponent },
  {
    path: 'theeme/:idtheme/:www',
    component: ThemePreviewComponent
  },
  { path: 'unity/:idunity', component: UnityPreviewComponent },
  { path: 'tema/:idtheme/:idunity', component: TasksComponent },
  { path: 'user/:id', component: UserPreviewComponent },
  { path: 'user', component: LandComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: UserComponent },
  { path: 'cursoup/:id', component: PhotoPreviewComponent },
  { path: '', component: PhotosListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
