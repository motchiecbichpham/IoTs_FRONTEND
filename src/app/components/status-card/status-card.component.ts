import { Component, Input } from '@angular/core';
import { Status } from '../../model/air-quality.data';

@Component({
  selector: 'app-status-card',
  standalone: true,
  imports: [],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.css',
})
export class StatusCardComponent {
  @Input() status!: Status;
}
