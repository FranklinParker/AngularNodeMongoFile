import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Person} from '../../models/person';
import {NgForm} from '@angular/forms';
import {PersonService} from '../../service/person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  person: Person = {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  };
  file: File;
  url: any;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
  }

  onFileSelected(files: FileList) {
    if (files && files.length > 0) {
      this.file = files.item(0);
      if (this.file.size > 800000) {
        this.url = null;
        this.file = null;
        alert('File Exceeds 400k, not allowed');

      } else {
        const fileReader = new FileReader();
        const url = fileReader.readAsDataURL(this.file);
        fileReader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
        };
      }

    } else {
      this.url = null;
      this.file = undefined;
    }


  }


  async onSubmit(form: NgForm) {
    console.log('saving')
    await this.personService.savePerson(this.file, this.person);

  }

}
