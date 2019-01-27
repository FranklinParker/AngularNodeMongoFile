import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../../models/person';

@Component({
  selector: 'app-person-list-expand',
  templateUrl: './person-list-expand.component.html',
  styleUrls: ['./person-list-expand.component.css']
})
export class PersonListExpandComponent implements OnInit {
  @Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}
