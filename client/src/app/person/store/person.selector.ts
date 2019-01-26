import { createSelector} from "@ngrx/store";
import * as fromPerson from './person.reducer';
import {PersonState} from "./person.reducer";
import {Person} from '../models/person';


export const selectPersonState = state => state.person;

export const arePeopleLoading = createSelector(
  selectPersonState,
  (personState:PersonState)=> personState.recordsLoading
)


export const arePeopleLoaded = createSelector(
  selectPersonState,
  (personState:PersonState)=> personState.recordsLoaded
)



export const isSelectedPersonDeleted= createSelector(
  selectPersonState,
  (personState:PersonState)=> personState.deletedId === personState.person.id
)



export const getSelectedPerson = createSelector(
  selectPersonState,
  (personState:PersonState)=> personState.person

)



export const selectPeople = createSelector(
  selectPersonState,
  fromPerson.selectAll
)

export const selectPeopleIds = createSelector(
  selectPersonState,
  fromPerson.selectIds

)

export const filterPersonByLastNameStartsWith =
  (startsWith: string) =>
    createSelector(
      selectPeople,
      (people: Person[]) => {
        const filteredPeople:Person[] = people.filter((person:Person)=> person.lastName.startsWith(startsWith));
        return filteredPeople;
      }
    );


