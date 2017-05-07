import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {

  notesArray: Array<INote>;
  notesMainArray:Array<INoteMain>;

  constructor() { }

  getNotes(): Array<INote> {

    this.notesArray = [{ "noteAuthor": "sanjith", "noteTime": "11 july 2016", "noteText": "Note by sanjith", "noteLevel": 0 },
    { "noteAuthor": "sanjith1", "noteTime": "11 july 2016", "noteText": "reply by sanjith1", "noteLevel": 1 },
    { "noteAuthor": "sanjith2", "noteTime": "11 july 2016", "noteText": "reply by sanjith2", "noteLevel": 1 },
    { "noteAuthor": "ron", "noteTime": "11 july 2016", "noteText": "Note and discussion by Ron", "noteLevel": 0 },
    { "noteAuthor": "ronnie", "noteTime": "11 july 2016", "noteText": "Note and validation by Ronnie", "noteLevel": 0 },
    { "noteAuthor": "ronnie1", "noteTime": "11 july 2016", "noteText": "Ronnie1 replied", "noteLevel": 1 },
    { "noteAuthor": "jon", "noteTime": "11 july 2016", "noteText": "Note and discussion by jon", "noteLevel": 0 },
    ];

    return this.notesArray;
  }


  getMainNotes():Array<INoteMain>{

 this.notesMainArray =[{
   "noteAuthor":"sanjith1",
   "noteTime":"11 july 2016",
   "noteText":"main note first by sanjith1",
   "noteLevel":0,
   "subNotes":[
      {
         "noteAuthor":"sanjith1",
         "noteTime":"11 july 2016",
         "noteText":"reply by sanjith1",
         "noteLevel":1,
         "subNotes":[],
         "attachments":[]
      },
      {
         "noteAuthor":"sanjith2",
         "noteTime":"11 july 2016",
         "noteText":"reply by sanjith2",
         "noteLevel":1,
         "subNotes":[],
         "attachments":[]
      }
   ],
   "attachments":[
      {
         "fileName":"report.csv",
         "filePath":"C:/folder1/report.csv"
      },
      {
         "fileName":"compliance.txt",
         "filePath":"C:/folder1/compliance.txt"
      }
   ]
},
{
   "noteAuthor":"Benjamin",
   "noteTime":"11 july 2016",
   "noteText":"Main note by Benjamin",
   "noteLevel":0,
   "subNotes":[
      {
         "noteAuthor":"sanjith1",
         "noteTime":"11 july 2016",
         "noteText":"reply by sanjith1",
         "noteLevel":1,
         "subNotes":[],
         "attachments":[]
      },
      {
         "noteAuthor":"Benjamin",
         "noteTime":"11 july 2016",
         "noteText":"reply by Benjamin",
         "noteLevel":1,
         "subNotes":[],
         "attachments":[]
      }
   ],
   "attachments":[
      {
         "fileName":"report22.csv",
         "filePath":"C:/folder1/report22.csv"
      },
      {
         "fileName":"compli.txt",
         "filePath":"C:/folder1/compli.txt"
      }
   ]
},
{
   "noteAuthor":"Benjamin",
   "noteTime":"11 july 2016",
   "noteText":"Main note by Benjamin",
   "noteLevel":0,
   "subNotes":[
     
   ],
   "attachments":[
      {
         "fileName":"compli.txt",
         "filePath":"C:/folder1/compli.txt"
      }
   ]
}

];

return this.notesMainArray;
  }

}
