import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LightData, Status } from '../../model/air-quality.data';
import { User } from '../../model/user.data';
import { StatusCardComponent } from "../status-card/status-card.component";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StatusCardComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'John Doe',
    energyUsage: 150,
    lastUpdated: new Date(),
  };

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
    // Add more data as needed
  ];

  ngOnInit() {
    // Fetch real data here
  }
}
