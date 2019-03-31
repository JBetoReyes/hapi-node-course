import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HapiExercisesComponent } from './hapi-exercises/hapi-exercises.component';
import { Exercise01Component } from './hapi-exercises/presentation/exercise01/exercise01.component';
import {MatCheckboxModule, MatExpansionModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';
import { Exercise02Component } from './hapi-exercises/presentation/exercise02/exercise02.component';
import { Exercise03Component } from './hapi-exercises/presentation/exercise03/exercise03.component';
import { Exercise04Component } from './hapi-exercises/presentation/exercise04/exercise04.component';
import { Exercise05Component } from './hapi-exercises/presentation/exercise05/exercise05.component';
import { Exercise06Component } from './hapi-exercises/presentation/exercise06/exercise06.component';
import { Exercise07Component } from './hapi-exercises/presentation/exercise07/exercise07.component';
import { Exercise08Component } from './hapi-exercises/presentation/exercise08/exercise08.component';
import { Exercise09Component } from './hapi-exercises/presentation/exercise09/exercise09.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HapiExercisesComponent, Exercise01Component, Exercise02Component, Exercise03Component, Exercise04Component, Exercise05Component, Exercise06Component, Exercise07Component, Exercise08Component, Exercise09Component],
  imports: [
    CommonModule,
    MatExpansionModule,
    MarkdownModule.forChild(),
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    HapiExercisesComponent
  ]
})
export class ExercisesModule { }
