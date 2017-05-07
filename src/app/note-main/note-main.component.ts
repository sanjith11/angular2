import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../notes.service'

@Component({
  selector: 'app-note-main',
  templateUrl: './note-main.component.html',
  styleUrls: ['./note-main.component.css'],
  providers: [NotesService]
})
export class NoteMainComponent implements OnInit {

  @Input() noteMain: INoteMain;

  constructor(private noteService: NotesService) { }

  hideSubNotesControls: boolean;
  subNoteText: string;

  ngOnInit() {
   // this.noteMain = this.noteService.getMainNotes()[0];
    this.hideSubNotesControls = true;
  }

  showSubNoteControls() {

    this.hideSubNotesControls = false;

  }

  ishideSubNoteControls() {
    return this.hideSubNotesControls;
  }

  saveSubNote() {
    this.noteMain.subNotes.splice(this.noteMain.subNotes.length + 1, 0, { "noteAuthor": "donald", "noteTime": "11 july 2016", "noteText": this.subNoteText, "noteLevel": 1, "subNotes": [], "attachments": [] });
    this.subNoteText = "";
    this.hideSubNotesControls = true;

  }

  cancelSubNoteCreation() {
    this.hideSubNotesControls = true;
    this.subNoteText = "";
  }

}
