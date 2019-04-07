import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './pages/node/modules/modules.component';
import {HapiExercisesComponent} from './pages/exercises/hapi-exercises/hapi-exercises.component';
import {ClassesComponent} from './pages/es6/classes/classes.component';
import {ArrowComponent} from './pages/es6/arrow/arrow.component';

const routes: Routes = [
  { path: '', redirectTo: 'node/modules', pathMatch: 'full'  },
  { path: 'node/modules', component: ModulesComponent },
  { path: 'exercises/hapi', component: HapiExercisesComponent },
  { path: 'es6/classes', component: ClassesComponent },
  { path: 'es6/arrow', component: ArrowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
