import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  file: File
  constructor() { }

  ngOnInit() {
  }

  onFileSelected(files: FileList) {
    this.file = files.item(0);
    console.log('file change', this.file);
  }



}
