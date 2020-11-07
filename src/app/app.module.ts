import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventthumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  UpVoteComponent,
  EventResolver,
  VoterService,
  LocationValidator,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import {
  TOASTR_TOKEN,
  Toastr,
  CollapsableWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective,
  JQ_SERVICE,
} from './common/index';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './events/user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/index';
import { SessionListComponent } from './events/event-details/index';
import { DurationPipe } from './events/shared/index';

import { HttpClientModule } from '@angular/common/http';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

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
    SimpleModalComponent,
    UpVoteComponent,
    DurationPipe,
    ModalTriggerDirective,
    LocationValidator,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_SERVICE, useValue: jQuery },
    { provide: 'CanDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver,
    EventResolver,
    AuthService,
    VoterService,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("you didn't save this event, you want to leave?");
  return true;
}
