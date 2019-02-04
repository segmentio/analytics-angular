import { Component, OnInit } from '@angular/core';

// Expose analytics variable
declare const analytics;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    analytics.page('About');
  }
}
