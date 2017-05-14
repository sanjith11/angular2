import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { SanComponentComponent } from './san-component/san-component.component';
import { NotesComponent } from './notes/notes.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteMainComponent } from './note-main/note-main.component';
import {NoteFilter} from './notes/note-filter'


const appRoutes:Routes =[
{path:'reddit',component:SanComponentComponent},
{path:'customer',component:CustomerComponent},
{path:'notes',component:NotesComponent},
{path:'notes/noteMainList',component:NoteMainComponent},
{path:'notes/noteList',component:NoteListComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SanComponentComponent,
    NotesComponent,
    NoteListComponent,
    NoteMainComponent,
    NoteFilter
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
