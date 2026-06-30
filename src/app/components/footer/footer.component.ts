import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `<div class="bottom">© 2026 Tawhid Ather — built with Angular.</div>`,
  styles: [`
    .bottom {
      text-align: center;
      color: var(--muted);
      font-size: 12.5px;
      font-family: var(--font-mono);
      padding: 24px 0 40px;
    }
  `]
})
export class FooterComponent {}
