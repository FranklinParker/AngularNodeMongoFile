import { Action } from '@ngrx/store';

export enum PersonActionTypes {
  LoadPersons = '[Person] Load Persons'
}

export class LoadPersons implements Action {
  readonly type = PersonActionTypes.LoadPersons;
}

export type PersonActions = LoadPersons;
