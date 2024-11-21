import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Note: Fixed typo from 'styleUrl' to 'styleUrls'
  imports: [RouterModule],
  standalone: true,
})
export class AppComponent {
  title = 'SmartBerry';
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        console.log(this.router.url);

        this.showNavbar = this.router.url !== '/login';
        console.log(this.showNavbar);
      });
  }
}
