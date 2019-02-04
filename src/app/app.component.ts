import { Component } from '@angular/core';

// Expose analytics variable
declare const analytics;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  trackClickEvent() {
    analytics.track('Clicked Learn Angular Link');
  }
}
