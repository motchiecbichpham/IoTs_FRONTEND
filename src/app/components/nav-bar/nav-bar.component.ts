import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavbarComponent {
  activeTab: string = 'home';

  constructor(private router: Router) {
    // Set initial active tab based on current route
    this.activeTab = this.router.url.includes('dashboard')
      ? 'dashboard'
      : 'home';
  }

  switchTab(tab: string) {
    this.activeTab = tab;

    // Navigate to the corresponding route
    if (tab === 'home') {
      this.router.navigate(['/home']);
    } else if (tab === 'dashboard') {
      this.router.navigate(['/dashboard']);
    }
  }
}
