import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerLinks = [
    {
      links: [
        'Supporto',
        'Privacy e cookie',
        'Termini di servizio del sito Web',
        'Mappa del sito',
        'PlayStation Studios',
        'Termini legali',
        'Informazioni su SIE',
      ],
    },
    {
      links: [
        'Termini di servizio di PSN',
        'Condizioni di utilizzo del software',
        'Politica di annullamento di PS Store',
        'Avvertenze per la salute',
        'Informazioni sulle classificazioni',
      ],
    },
    {
      links: ['Facebook', 'X', 'YouTube', 'App Android', 'App iOS'],
    },
  ];
}
