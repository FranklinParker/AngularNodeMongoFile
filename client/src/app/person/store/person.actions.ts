import { Action } from '@ngrx/store';
import {Person} from '../models/person';

export enum PersonActionTypes {
  LoadPersons = '[Person] Load Persons',
  PeopleLoaded = '[PeopleLoaded] People Loaded'

}

export class LoadPersons implements Action {
  readonly type = PersonActionTypes.LoadPersons;
}


export class PeopleLoaded implements Action {
  readonly type = PersonActionTypes.PeopleLoaded;

  constructor(public payload: { people: Person[] }) {
  }
}

export type PersonActions = LoadPersons
  | PeopleLoaded;
