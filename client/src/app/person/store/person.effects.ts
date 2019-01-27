import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {filter, mergeMap, withLatestFrom} from 'rxjs/operators';

import {AppState} from '../../reducers';
import {PersonService} from '../service/person.service';
import {LoadPersons, PeopleLoaded, PersonActionTypes} from './person.actions';
import {arePeopleLoaded} from './person.selector';
import {Person} from '../models/person';


@Injectable()
export class PersonEffects {
  @Effect()
  loadGroups = this.actions$.pipe(
    ofType<LoadPersons>(PersonActionTypes.LoadPersons),
    withLatestFrom(this.store.pipe(select(arePeopleLoaded))),
    filter(([action, isLoaded]) => {
      return !isLoaded;
    }),
    mergeMap(async () => {
      const people: Person[] = await this.personService.loadPeople();
      return new PeopleLoaded({people:people});
    })
  );
  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private personService: PersonService) {}
}
