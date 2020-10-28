import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  EventRouteActivator,
  CreateSessionComponent,
} from './events/index';
import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
  { path: 'events/404', component: Error404Component },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['CanDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('src/app/events/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
];
