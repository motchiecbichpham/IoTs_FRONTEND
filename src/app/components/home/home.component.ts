import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LightData, Status } from '../../model/air-quality.data';
import { House, User } from '../../model/user.data';
import { AuthService } from '../../services/auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { StatusCardComponent } from '../status-card/status-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StatusCardComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  user!: House;

  airFilterStatus: Status = {
    isActive: true,
    label: 'Air Filter',
    description: 'Air filter is working properly',
  };

  ledsStatus: Status = {
    isActive: true,
    label: 'LED Lights',
    description: 'All LED lights are operational',
  };

  energyData: LightData[] = [
    {
      timestamp: new Date(),
      energyProduce: 45.6,
      energySave: 12.3,
    },
  ];

  ngOnInit() {
    // Fetch real data here
    this.user = this.authService.getUser();
    console.log(this.user);
  }
}
