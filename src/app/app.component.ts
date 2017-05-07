import { Component } from '@angular/core';
import {Http} from '@angular/http'
import { Router } from '@angular/router';
import { HttpModule }    from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) { }

 title = 'Angular 2 App';

    goBack(){
    console.log("###################### :in gotoSan ")
    this.router.navigate(['/']);
  }

}
