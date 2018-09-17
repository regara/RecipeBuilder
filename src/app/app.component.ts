import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sectionLoaded = 'recipe'

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCTVDm2HQ48Juqfwi5fdX5hGa9YGTE97IM",
      authDomain: "ng-recipe-book-1b1e6.firebaseapp.com"
    });
  }

  onNavigate(section: string) {
    this.sectionLoaded = section;
  }
}
