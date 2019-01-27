import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AppState} from '../../../reducers';
import {select, Store} from '@ngrx/store';
import {selectPeople} from '../../store/person.selector';
import {Person} from '../../models/person';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('100ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PersonListComponent implements OnInit {
  dataSource = new MatTableDataSource<Person>([]);
  displayedColumns = ['firstName', 'lastName', 'email'];
  personExpanded: Person = undefined;
  @Output() personSelected = new EventEmitter<Person>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
      select(selectPeople)
    ).subscribe((people: Person[])=>{
      console.log('people', people);
      this.dataSource.data = people;
    });
  }

  rowClick(person: Person){
    if(this.personExpanded!==undefined
      && this.personExpanded.id === person.id){
      this.personExpanded=undefined;

    }else{
      //this.store.dispatch(new GroupSelected({group: element}));
      this.personExpanded = person;
    }

  }

}
