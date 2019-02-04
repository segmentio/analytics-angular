import { Component, OnInit } from '@angular/core';

// Expose analytics variable
declare const analytics;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    analytics.page('Home');
  }
}
