import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input() items: any[] = [];
  @Input() title: string = '';

  currentIndex = 0;
  itemsPerPage = 6;

  //visibleItems: Restituisce una fetta dell'array carouselItems, a partire da currentIndex e includendo itemsPerPage elementi.
  get visibleItems() {
    return this.items.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
  }

  /*
    Se il carosello ha 9 elementi (carouselItems.length = 9) e itemsPerPage = 6, la funzione imposterà currentIndex = 9 - 6 = 3
    In questo modo, quando visibleItems viene eseguito, restituirà gli ultimi 6 elementi, che vanno dalla posizione 3 fino alla fine dell'array ([4, 5, 6, 7, 8, 9]).
 */
  next() {
    this.currentIndex = this.items.length - this.itemsPerPage;
  }

  prev() {
    // Imposta currentIndex a 0, mostrando sempre i primi elementi.
    this.currentIndex = 0;
  }
}
