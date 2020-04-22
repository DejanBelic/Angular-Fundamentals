import {Component, Input, OnInit} from '@angular/core';
import {ISession} from '../../shared';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {
@Input() sessions: ISession;
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit() {
  }

}
