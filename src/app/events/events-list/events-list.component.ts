import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `<div>
      <h1>Upcoming Angular Events</h1>
    </div>
    <hr />
    <event-thumbnail [event]="event1"></event-thumbnail> `,
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/29/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/imges/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };
}