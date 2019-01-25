import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    NavHeaderComponent
  ]
})
export class CoreModule { }
