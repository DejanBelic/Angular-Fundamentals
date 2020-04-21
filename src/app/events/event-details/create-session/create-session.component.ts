import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession} from '../../shared';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss'],
  styles: [
    `
      .error input, .error select, .error textarea{ background-color: #E3C3C5}
      .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder { color: #999}
    .error :-moz-placeholder { color: #999}
    .error :-ms-input-placeholder {
      color: #999;
    }`
  ]
})
export class CreateSessionComponent implements OnInit {
  name: FormControl;
  level: FormControl;
  duration: FormControl;
  abstract: FormControl;
  presenter: FormControl;
  newSessionForm: FormGroup;
  constructor() { }
  ngOnInit() {
      this.name = new FormControl('', Validators.required);
      this.presenter = new FormControl('', Validators.required);
      this.level = new FormControl('', Validators.required);
      this.duration = new FormControl('', Validators.required);
      this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

      this.newSessionForm = new FormGroup({
        name: this.name,
        presenter: this.presenter,
        duration: this.duration,
        level: this.level,
        abstract: this.abstract
      });
  }

  saveSession(formValues) {
    const session: ISession = {
        id: undefined,
        name: formValues.name,
        duration: +formValues.duration,
        level: formValues.level,
        presenter: formValues.presenter,
        abstract: formValues.abstract,
        voters: []
    };
  }

}
