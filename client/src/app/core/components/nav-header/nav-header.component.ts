import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  loggedInUser: boolean = true;
  @Output() toggleSideNav = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
