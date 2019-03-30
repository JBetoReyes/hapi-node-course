import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HapiExercisesComponent } from './hapi-exercises/hapi-exercises.component';
import { Exercise01Component } from './hapi-exercises/presentation/exercise01/exercise01.component';
import {MatExpansionModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';
import { Exercise02Component } from './hapi-exercises/presentation/exercise02/exercise02.component';

@NgModule({
  declarations: [HapiExercisesComponent, Exercise01Component, Exercise02Component],
  imports: [
    CommonModule,
    MatExpansionModule,
    MarkdownModule.forChild()
  ],
  exports: [
    HapiExercisesComponent
  ]
})
export class ExercisesModule { }
