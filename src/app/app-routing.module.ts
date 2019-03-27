import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './pages/node/modules/modules.component';
import {HapiExercisesComponent} from './pages/exercises/hapi-exercises/hapi-exercises.component';

const routes: Routes = [
  { path: 'node/modules', component: ModulesComponent },
  { path: 'exercises/hapi', component: HapiExercisesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
