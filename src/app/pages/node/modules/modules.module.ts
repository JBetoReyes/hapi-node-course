import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import {RunkitModule} from '../../../shared/runkit/runkit.module';
import {MarkdownModule} from 'ngx-markdown';
import {PrismComponentsModule} from '../../../shared/prism-components/prism-components.module';

@NgModule({
  declarations: [ModulesComponent],
  imports: [
    CommonModule,
    RunkitModule,
    PrismComponentsModule,
    MarkdownModule.forChild()
  ]
})
export class ModulesModule { }
