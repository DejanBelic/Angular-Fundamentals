import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ISession} from '../../shared';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {
@Input() sessions: ISession[];
@Input() filterBy: string;
  visibleSessions: ISession[] = [];
  faCoffee = faCoffee;
  constructor() { }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }
  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
    this.visibleSessions = this.sessions.filter(session => {
      return session.level.toLocaleLowerCase() === filter;
    });
    }
  }

}
