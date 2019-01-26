import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../service/person.service';

@Component({
  selector: 'app-person-home',
  templateUrl: './person-home.component.html',
  styleUrls: ['./person-home.component.scss']
})
export class PersonHomeComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.loadPeople();
  }

}
