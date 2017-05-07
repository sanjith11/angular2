import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedditService } from '../redditService'
import { RedditData } from '../RedditData';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-san-component',
  templateUrl: './san-component.component.html',
  styleUrls: ['./san-component.component.css'],
  providers: [RedditService]
})


export class SanComponentComponent implements OnInit {
 redditData :Array<RedditData>;
  constructor(private redditService: RedditService) { };

  private getRedditPosts() {
 
    console.log(" going to get reddit posts"+this.redditService.getRedditFeeds());
    this.redditService.getRedditFeeds().subscribe((result) => {
      console.log(result);
      this.redditData = result;
    });
  }

  ngOnInit() {
  }

}

