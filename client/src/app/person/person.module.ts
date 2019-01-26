import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import {PersonHomeComponent} from './compoments/person-home/person-home.component';
import {PersonEditComponent} from './compoments/person-edit/person-edit.component';
import {PersonListComponent} from './compoments/person-list/person-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PersonHomeComponent,
    PersonEditComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonRoutingModule
  ],
  exports: [
    PersonHomeComponent
  ]

})
export class PersonModule { }
