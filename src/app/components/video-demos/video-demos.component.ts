import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PortfolioDataService, VideoDemo } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-video-demos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-demos.component.html',
  styleUrl: './video-demos.component.scss'
})
export class VideoDemosComponent {
  constructor(public data: PortfolioDataService, private sanitizer: DomSanitizer) {}

  embedUrl(video: VideoDemo): SafeResourceUrl | null {
    const youtubeId = this.extractYouTubeId(video.youtubeId ?? '') || this.extractYouTubeId(video.embedNote ?? '');
    if (!youtubeId) return null;

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`
    );
  }

  private extractYouTubeId(value: string): string | null {
    if (!value) return null;

    const match = value.trim().match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return match?.[1] ?? null;
  }
}
