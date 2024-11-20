import { Component, Input } from '@angular/core';
import { User } from '../../model/user.data';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() user!: User;
}
