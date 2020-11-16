import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './event.service';
@Component({
  templateUrl: `./create-event.component.html`,
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e05c65;
      }
      .error::placeholder {
        color: #999;
      }
    `,
  ],
})
export class CreateEventComponent {
  newEvent;
  isDirty = true;
  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }
}
