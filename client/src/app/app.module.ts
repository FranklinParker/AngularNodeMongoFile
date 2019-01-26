import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {MaterialModule} from './material/material.module';
import { PersonHomeComponent } from './person/compoments/person-home/person-home.component';
import { PersonEditComponent } from './person/compoments/person-edit/person-edit.component';
import { PersonListComponent } from './person/compoments/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonHomeComponent,
    PersonEditComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
