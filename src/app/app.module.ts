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
  CreateEventComponent, EventsListResolver, SessionListComponent, CreateSessionComponent, DurationPipe,
} from './events';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CollapsibleWellComponent,  JQUERY_TOKEN} from './common';
import { SimpleModalComponent } from './common';
import { ModalTriggerDirective } from './common';
import { UpVoteComponent } from './events/event-details/up-vote/up-vote.component';

const jQuery = window['jQuery'];
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
    SessionListComponent,
    CreateSessionComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventsListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtState
    },
      {
        provide: JQUERY_TOKEN, useValue: jQuery
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
