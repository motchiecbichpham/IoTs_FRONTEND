import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LightData, Status } from '../../model/air-quality.data';
import { House } from '../../model/user.data';
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
  airFilterStatus!: Status;
  ledsStatus!: Status;
  energyData: LightData[] = [
    {
      timestamp: new Date(),
      energyProduce: 45.6,
      energySave: 12.3,
    },
  ];

  ngOnInit() {
    this.user = this.authService.getUser();
    this.airFilterStatus = {
      isActive: this.user.isAirFilterOn,
      label: 'Air Filter',
      description: 'Air filter is working properly',
    };
    this.ledsStatus = {
      isActive: this.user.isOccupied,
      label: 'LED Lights',
      description: 'All LED lights are operational',
    };

    console.log(this.user);
  }
}
