import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventModel} from './shared';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{ event?.name | uppercase}}</h2>
    <div>Date: {{event.date }}</div>
    <div [ngClass]="getTimeStartClass()" [ngSwitch]="event?.time">
      Time: {{event?.time }}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: {{event.price | currency: 'USD' }}</div>
    <div [hidden]="!event?.location">
      <span>Location: {{event.location?.address}}</span>
      <span>&nbsp;</span>
      <span>{{event.location?.city }}, {{event.location?.country }}</span>
    </div>
    <div [hidden]="!event.onlineUrl">
      <a [href]="event.onlineUrl">Online URL: {{event.onlineUrl}}</a>
    </div>
  </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 210px;
        background-color: #485563;
        border-radius: 8px;
        padding: 10px;
        margin: 10px;
      }
      .green { color: #51a351!important;}
      .bold { font-weight: bold }
      .pad-left { margin-left: 10px}
      .well div { color: #bbb}
      h2 {
        color: white;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: EventModel;

  getTimeStartClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart};
  }
}
