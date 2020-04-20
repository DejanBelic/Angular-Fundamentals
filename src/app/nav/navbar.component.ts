  import { Component} from '@angular/core';

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

}
