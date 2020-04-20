import {Routes} from '@angular/router';
import {NotFoundComponent} from './app/errors/not-found/not-found.component';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolver,
  EventRouteActivatorService
} from './app/events';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  // tslint:disable-next-line:max-line-length
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver}}, // We adding resolve handler and passing object with property events
  // tslint:disable-next-line:max-line-length
  // This is saying before resolving this route call this EventRouteActivatorService and when that resolver finished and return some data add that data to propery events.
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: 'src/app/user/user.module#UserModule'}
];
