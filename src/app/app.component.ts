import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Note: Fixed typo from 'styleUrl' to 'styleUrls'
  imports: [RouterModule, NavbarComponent],
  standalone: true,
})
export class AppComponent {
  title = 'SmartBerry';
}
