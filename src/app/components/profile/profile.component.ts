import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { House } from '../../model/user.data';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() user!: House;
}
