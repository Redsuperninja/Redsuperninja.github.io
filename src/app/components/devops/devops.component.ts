import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-devops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devops.component.html',
  styleUrl: './devops.component.scss'
})
export class DevopsComponent {
  constructor(public data: PortfolioDataService) {}

  levelLabel(level: string): string {
    return level === 'shipped' ? 'shipped' : level === 'in-progress' ? 'in progress' : 'next up';
  }
}
