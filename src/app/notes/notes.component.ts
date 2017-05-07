import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../notes.service'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  notesArray: Array<INote>;
  constructor(private noteService: NotesService) { }
  notesFormGroup: FormGroup;
  commentIndexForEdit: number;
  noteAvailableforEdit: boolean;
  replyDisabled: boolean;

  ngOnInit() {
    this.notesFormGroup = new FormGroup({
      noteAuthor: new FormControl(),
      noteTime: new FormControl(),
      noteText: new FormControl(),
      commentText: new FormControl()

    });

    this.notesArray = this.noteService.getNotes();
    this.commentIndexForEdit = -1;
    this.noteAvailableforEdit = false;
    this.replyDisabled = false;
  }

  hideNoteAdditionSection() {
    return !this.noteAvailableforEdit;
  }

  hideComments(index: number) {
    if (this.commentIndexForEdit == index) {
      return false;
    } else {
      return true;
    }
  }

  saveComment(position: number) {
    this.notesArray.splice(position + 1, 0, { "noteAuthor": "donald", "noteTime": "11 july 2016", "noteText": this.notesFormGroup.get("commentText").value, "noteLevel": 1 });
    this.notesFormGroup.get("commentText").setValue('');
    this.commentIndexForEdit = -1;
    this.replyDisabled = false;
  }

  isReplyDisabled() {

    return this.replyDisabled;
  }

  hideNewCommentControls() {
    this.replyDisabled = false;
    this.commentIndexForEdit = -1;

  }

  showNewNoteControls() {
    this.noteAvailableforEdit = true;
  }

  hideNewNoteControls() {
    this.noteAvailableforEdit = false;
  }

  isReplyControlsRequired(position: number) {
    var enableReplyControl = false;

    if (this.notesArray[position + 1] == undefined ||
      (this.notesArray[position + 1] && this.notesArray[position + 1].noteLevel == 0)) {
      enableReplyControl = true;
    }

    return enableReplyControl;
  }

  saveNote() {
    this.notesArray.unshift({ "noteAuthor": "w275903", "noteTime": "11 july 2016", "noteText": this.notesFormGroup.get("noteText").value, "noteLevel": 0 })
    this.notesFormGroup.get("noteText").setValue("");
    this.noteAvailableforEdit = false;

  }

  showNewCommentControls(position: number) {
    this.replyDisabled = true;
    this.commentIndexForEdit = position;
  }
}
