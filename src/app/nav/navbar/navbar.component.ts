import { Component } from '@angular/core';
import { ISession } from 'src/app/events';
import { AuthService } from '../../events/user/auth.service';
import { EventService } from '../../events/shared/index';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active {
        color: orange;
      }
    `,
  ],
})
export class NavbarComponent {
  searchTerm = '';
  foundSessions: ISession[];
  constructor(public auth: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
