import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Person} from '../models/person';
import {PersonActions, PersonActionTypes} from './person.actions';


export const adapter: EntityAdapter<Person> =
  createEntityAdapter<Person>();

export const BLANK_PERSON: Person = {
  id: undefined,
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  imageFileId: undefined
};

export interface PersonState extends EntityState<Person> {
  recordsLoaded: boolean;
  recordsLoading: boolean;
  deletedId: string;
  recordUpdating: boolean;
  person: Person;

}

export const initialState: PersonState = adapter.getInitialState({
  recordsLoaded: false,
  recordsLoading: false,
  deletedId: undefined,
  recordUpdating: false,
  person: BLANK_PERSON
});


export function reducer(state:PersonState = initialState, action: PersonActions): PersonState {
  switch (action.type) {
    case PersonActionTypes.PeopleLoaded:{
      return adapter.addAll(action.payload.people,
        {...state, recordsLoaded: true, recordsLoading: false});
    }
    default:
      return state;
  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
