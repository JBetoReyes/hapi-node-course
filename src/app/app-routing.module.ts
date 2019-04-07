import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './pages/node/modules/modules.component';
import {HapiExercisesComponent} from './pages/exercises/hapi-exercises/hapi-exercises.component';
import {ClassesComponent} from './pages/es6/classes/classes.component';
import {ArrowComponent} from './pages/es6/arrow/arrow.component';
import {DestructuringComponent} from './pages/es6/destructuring/destructuring.component';
import {PromisesComponent} from './pages/asyncnawait/promises/promises.component';

const routes: Routes = [
  { path: '', redirectTo: 'node/modules', pathMatch: 'full'  },
  { path: 'node/modules', component: ModulesComponent },
  { path: 'exercises/hapi', component: HapiExercisesComponent },
  { path: 'es6/classes', component: ClassesComponent },
  { path: 'es6/arrow', component: ArrowComponent },
  { path: 'es6/destructuring', component: DestructuringComponent },
  { path: 'asyncnawait/promises', component: PromisesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
