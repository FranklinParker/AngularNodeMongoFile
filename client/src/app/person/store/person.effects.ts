import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {Store} from '@ngrx/store';

import {AppState} from '../../reducers';
import {PersonService} from '../service/person.service';


@Injectable()
export class PersonEffects {

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private personService: PersonService) {}
}
