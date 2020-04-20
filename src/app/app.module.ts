import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import {EventService} from './events/shared/event.service';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';
import {EventsListResolver} from './events/events-list-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventsListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function checkDirtState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved changes, do you really want to cancel?');
  }
  return false;
}
