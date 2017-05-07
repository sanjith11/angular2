import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../notes.service'

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers: [NotesService]
})
export class NoteListComponent implements OnInit {

  noteList: Array<INoteMain>;
  hideNewNoteControls: boolean;
  noteText: string;

  constructor(private noteService: NotesService) { }

  ngOnInit() {
    this.noteList = this.noteService.getMainNotes();
    this.hideNewNoteControls = true;
    this.noteText = "";
  }

  isHideNewNoteControls() {
    return this.hideNewNoteControls
  }
  showNewNoteControls() {
    this.hideNewNoteControls = false;

  }

  cancelNoteCreation() {
    this.hideNewNoteControls = true;

  }

  saveNote() {

    this.noteList.splice(0, 0, { "noteAuthor": "donald", "noteTime": "11 july 2016", "noteText": this.noteText, "noteLevel": 1, "subNotes": [], "attachments": [] });
    this.noteText = "";
    this.hideNewNoteControls = true;

  }

}
