import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventthumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './events/user/auth.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/index';
import { SessionListComponent } from './events/event-details/index';
import { CollapsableWellComponent } from './common/collapsable-well.component';
import { DurationPipe } from './events/shared/index';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventthumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: 'CanDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver,
    AuthService,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("you didn't save this event, you want to leave?");
  return true;
}
