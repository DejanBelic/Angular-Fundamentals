  import {Component, Inject, Injector, OnInit} from '@angular/core';
  import {AuthService} from '../user/auth.service';
  import {EventService, ISession} from '../events/shared';
  import {JQUERY_TOKEN} from '../common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `#searchForm {
      margin-right: 100px;
    }
      .nav.navbar {
        font-size: 15px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    .navbar {
      background-color: bisque;
    }
      li > a.active {
        color: #F97924;
      }
    `
  ]
})

export class NavbarComponent {
  searchTerm = '';
  foundSessions: ISession[];
  constructor(
    private authService: AuthService,
    private eventService: EventService) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
