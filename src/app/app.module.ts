import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './nav/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import {
  EventThumbnailComponent,
  EventsListComponent,
  EventDetailsComponent,
  EventService,
  EventRouteActivatorService,
  CreateEventComponent, EventsListResolver,
} from './events';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventDetailsComponent,
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
