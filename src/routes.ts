import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './app/events/create-event/create-event.component';
import {NotFoundComponent} from './app/errors/not-found/not-found.component';
import {EventRouteActivatorService} from './app/events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: '/events', pathMatch: 'full'},
];
