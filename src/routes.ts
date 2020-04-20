import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './app/events/create-event/create-event.component';
import {NotFoundComponent} from './app/errors/not-found/not-found.component';
import {EventRouteActivatorService} from './app/events/event-details/event-route-activator.service';
import {EventsListResolver} from './app/events/events-list-resolver.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  // tslint:disable-next-line:max-line-length
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver}}, // We adding resolve handler and passing object with property events
  // tslint:disable-next-line:max-line-length
  // This is saying before resolving this route call this EventRouteActivatorService and when that resolver finished and return some data add that data to propery events.
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: './app/user/user.module#UserModule'}
];
