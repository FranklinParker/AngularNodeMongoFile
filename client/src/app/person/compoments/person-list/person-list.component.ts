import { Component, OnInit } from '@angular/core';
import {AppState} from '../../../reducers';
import {select, Store} from '@ngrx/store';
import {selectPeople} from '../../store/person.selector';
import {Person} from '../../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
      select(selectPeople)
    ).subscribe((people: Person[])=>{
      console.log('people', people);
    });
  }

}
