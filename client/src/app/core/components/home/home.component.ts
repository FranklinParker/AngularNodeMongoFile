import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  file: File;
  url: any;
  constructor() { }

  ngOnInit() {
  }

  onFileSelected(files: FileList) {
    if(files && files.length>0){
      this.file = files.item(0);
      const fileReader = new FileReader();
      const url = fileReader.readAsDataURL(this.file);
      fileReader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      };
    } else{
      this.url = null;
    }


  }

  onSubmit(form:NgForm) {

  }

}
