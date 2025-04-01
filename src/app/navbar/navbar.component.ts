import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navigationLinks = [
    { label: 'Novità', path: 'latest' },
    { label: 'Raccolte', path: 'raccolte' },
    { label: 'Promozioni', path: 'promozioni' },
    { label: 'Abbonamenti', path: 'abbonamenti' },
    { label: 'Sfoglia', path: 'browse' },
  ];
}
