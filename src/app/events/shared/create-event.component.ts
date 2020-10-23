import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  template: `
    <h1>New Event</h1>
    <hr />
    <div>
      <h3>[Create Event Form will go here]</h3>
      <hr />
      <hr />
      <button class="btn btn-primary">Save</button>
      <button
        (click)="cancel()"
        class="
        btn
        btn-default"
      >
        Cancel
      </button>
    </div>
  `,
})
export class CreateEventComponent {
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/events']);
  }
}
