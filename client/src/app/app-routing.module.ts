import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {PersonHomeComponent} from './person/compoments/person-home/person-home.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path: 'person', component: PersonHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
