import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModulesComponent} from './pages/node/modules/modules.component';

const routes: Routes = [
  { path: '/node/modules', component: ModulesComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
