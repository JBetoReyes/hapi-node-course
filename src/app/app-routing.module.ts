import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './pages/node/modules/modules.component';
import {HapiExercisesComponent} from './pages/exercises/hapi-exercises/hapi-exercises.component';
import {ClassesComponent} from './pages/es6/classes/classes.component';

const routes: Routes = [
  { path: '', redirectTo: 'node/modules', pathMatch: 'full'  },
  { path: 'node/modules', component: ModulesComponent },
  { path: 'exercises/hapi', component: HapiExercisesComponent },
  { path: 'es6/classes', component: ClassesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
