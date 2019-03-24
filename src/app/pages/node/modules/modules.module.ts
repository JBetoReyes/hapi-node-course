import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import {RunkitModule} from '../../../shared/runkit/runkit.module';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [ModulesComponent],
  imports: [
    CommonModule,
    RunkitModule,
    MarkdownModule.forChild()
  ]
})
export class ModulesModule { }
