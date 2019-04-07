import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import {ModulesModule} from './pages/node/modules/modules.module';
import { RunKitEmbedComponent } from 'angular-runkit';
import {RunkitModule} from './shared/runkit/runkit.module';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import {ExercisesModule} from './pages/exercises/exercises.module';
import { ClassesComponent } from './pages/es6/classes/classes.component';
import { ArrowComponent } from './pages/es6/arrow/arrow.component';
import { DestructuringComponent } from './pages/es6/destructuring/destructuring.component';

export function markedOptions(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClassesComponent,
    ArrowComponent,
    DestructuringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulesModule,
    ExercisesModule,
    MatIconModule,
    RunkitModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptions,
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
