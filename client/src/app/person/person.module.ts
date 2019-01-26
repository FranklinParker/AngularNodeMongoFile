import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import {PersonHomeComponent} from './compoments/person-home/person-home.component';
import {PersonEditComponent} from './compoments/person-edit/person-edit.component';
import {PersonListComponent} from './compoments/person-list/person-list.component';
import {SharedModule} from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromPerson from './store/person.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects } from './store/person.effects';

@NgModule({
  declarations: [
    PersonHomeComponent,
    PersonEditComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonRoutingModule,
    StoreModule.forFeature('person', fromPerson.reducer),
    EffectsModule.forFeature([PersonEffects])
  ],
  exports: [
    PersonHomeComponent
  ]

})
export class PersonModule { }
