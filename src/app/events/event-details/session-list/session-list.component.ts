import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ISession} from '../../shared';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../user/auth.service';
import {VoterService} from '../../shared/voter.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {
@Input() sessions: ISession[];
@Input() filterBy: string;
@Input() sortBy: string;
@Input() eventId: number;

  visibleSessions: ISession[] = [];
  faCoffee = faCoffee;
  constructor(private auth: AuthService,
              private voterService: VoterService) { }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: ISession) {
      if (this.userHasVoted(session)) {
        this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
      } else {
        this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
      }
      if (this.sortBy === 'votes') {
        this.visibleSessions.sort(sortByVotesDesc);
      }
  }
  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
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

function sortByNameAsc(session1: ISession, session2: ISession) {
  if (session1.name > session2.name) { return 1; } else if (session1.name === session2.name) { return 0 } else {
    return -1;
  }
}

function sortByVotesDesc(session1: ISession, session2: ISession) {
  return session2.voters .length - session1.voters.length;

}
