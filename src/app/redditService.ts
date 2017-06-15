
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {RedditData} from './RedditData';
import * as PDFJS from "pdfjs-dist"; // Imports a global PDFJS object.
//import { PDFJS1 } from 'PDFJS';
import * as $ from "jquery";
@Injectable()
export class RedditService {  

  constructor(private http:Http) { 
var url = '//cdn.mozilla.net/pdfjs/helloworld.pdf';
var pdfDoc: PDFDocumentProxy;
var pageNum: number;
PDFJS.getDocument(url).then(function (pdf) {
	// Using promise to fetch the page
	pdfDoc = pdf;
	pageNum = 1;

}, (err) => {console.log(err);

console.log(" ######################## san #############");

});


  }

getRedditPosts():any{





return this.http.get("http://www.reddit.com/r/EarthPorn.json").map((response:Response)=>{
 
return response.json();

}).catch(this.handleError)


}

getRedditFeeds():Observable<Array<RedditData>>{
  var options = new RequestOptions({
      headers: new Headers({
        'san': 'testHeader'
        //,'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma'
      })

    });

    return this.http.get("http://www.reddit.com/r/EarthPorn.json",options)
    .map(response => response.json())
    .map(json => json.data.children)
    .map(children1 => children1.map(d => d.data));
    

/*
      return this.http.get("http://www.reddit.com/r/9gag.json")
    .map(response => response.json())
    .map(json => <Array<any>>json.data.children)
    .map(children1 => children1.map(d => {
      return {
        id: d.data.id,
        title: d.data.title,
        imageUrl: d.data.url
      }
    }));
    */
}



private handleError(error :Response){
return Observable.throw(error.statusText);
}

}
