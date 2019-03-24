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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulesModule,
    MatIconModule,
    RunkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
