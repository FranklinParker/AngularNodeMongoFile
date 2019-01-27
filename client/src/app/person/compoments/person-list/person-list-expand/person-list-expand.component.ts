import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../../models/person';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-person-list-expand',
  templateUrl: './person-list-expand.component.html',
  styleUrls: ['./person-list-expand.component.css']
})
export class PersonListExpandComponent implements OnInit {
  @Input() person: Person;
  fileUrl: string = environment.fileUrl;
  constructor() { }

  ngOnInit() {
  }

  get showImage(){
    return this.person && this.person.imageFileName;
  }

  get imageSource(){
    return this.fileUrl + this.person.imageFileName;
  }
}
