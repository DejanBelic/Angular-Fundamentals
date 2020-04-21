import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
  styles: [
    `
      .error input { background-color: #E3C3C5}
      .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder { color: #999}
    .error :-moz-placeholder { color: #999}
    .error :-ms-input-placeholder {
      color: #999;
    }`
  ]
})
export class CreateEventComponent implements OnInit {
  newEvent;
  isDirty = false;
  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }

}
