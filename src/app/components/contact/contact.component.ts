import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  constructor(public data: PortfolioDataService) {}

  onSubmit(): void {
    // Wire this up to Formspree, EmailJS, or a backend endpoint.
    this.submitted = true;
  }
}
