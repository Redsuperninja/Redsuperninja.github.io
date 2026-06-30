import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-video-demos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-demos.component.html',
  styleUrl: './video-demos.component.scss'
})
export class VideoDemosComponent {
  constructor(public data: PortfolioDataService) {}
}
