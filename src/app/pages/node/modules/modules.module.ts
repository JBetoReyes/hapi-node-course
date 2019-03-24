import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import {RunkitModule} from '../../../shared/runkit/runkit.module';

@NgModule({
  declarations: [ModulesComponent],
  imports: [
    CommonModule,
    RunkitModule
  ]
})
export class ModulesModule { }
