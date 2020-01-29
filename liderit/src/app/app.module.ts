import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDogsComponent } from './list-dogs/list-dogs.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { DogDetailComponent } from './dog-detail/dog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDogsComponent,
    DogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
