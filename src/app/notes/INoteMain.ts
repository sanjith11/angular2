interface INoteMain{  
    noteAuthor: string;
    noteTime: string;
    noteText:string;
    noteLevel:number;
    subNotes?:Array<INoteMain>;
    attachments?:Array<IFileAttachment>;
}
