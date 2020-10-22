import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventthumbnailComponent } from './events/events-list/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventthumbnailComponent,
    NavbarComponent,
  ],
  providers: [EventService, ToastrService],
  imports: [BrowserModule],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
