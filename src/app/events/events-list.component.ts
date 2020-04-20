import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  template: `
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
      <div class="col-md-5"  *ngFor="let event of events">
        <app-event-thumbnail [event]="event" ></app-event-thumbnail>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events: unknown;
  constructor(private eventService: EventService,
              private route: ActivatedRoute
              ) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }


}
