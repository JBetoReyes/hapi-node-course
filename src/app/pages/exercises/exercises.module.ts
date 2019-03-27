import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HapiExercisesComponent } from './hapi-exercises/hapi-exercises.component';
import { Exercise01Component } from './hapi-exercises/presentation/exercise01/exercise01.component';

@NgModule({
  declarations: [HapiExercisesComponent, Exercise01Component],
  imports: [
    CommonModule
  ],
  exports: [
    HapiExercisesComponent
  ]
})
export class ExercisesModule { }
