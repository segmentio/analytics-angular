import { Component } from '@angular/core';

// Expose analytics variable
declare var analytics;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Quickstart: Analytics.js + Angular';

  trackClickEvent() {
    analytics.track('Clicked Learn Angular Link');
  }
}
