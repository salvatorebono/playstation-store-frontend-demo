import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  gamePreviewList = [
    {
      img: 'images/game-preview/astrobot.jpg',
      title: 'Astrobot',
    },
    {
      img: 'images/game-preview/spider-man.jpg',
      title: 'Spider-Man 2',
    },
    {
      img: 'images/game-preview/2k25.jpg',
      title: '2K25',
    },
    {
      img: 'images/game-preview/horizon.jpg',
      title: 'Horizon',
    },
    {
      img: 'images/game-preview/helldivers.jpg',
      title: 'Helldivers II',
    },
    {
      img: 'images/game-preview/ronin.jpg',
      title: 'Rise of The Ronin',
    },
  ];

  gameCategories = [
    {
      img: 'images/game-categories/ps5.jpg',
      title: 'Tutti i giochi',
    },
    {
      img: 'images/game-categories/enhanced-games.jpg',
      title: 'Giochi Potenziati',
    },
    {
      img: 'images/game-categories/promotions.jpg',
      title: 'Promozioni',
    },
    {
      img: 'images/game-categories/additional-content.jpg',
      title: 'Contenuti aggiuntivi',
    },
    {
      img: 'images/game-categories/free-to-play.jpg',
      title: 'Free to Play',
    },
    {
      img: 'images/game-categories/ps-vr2.jpg',
      title: 'PS VR2',
    },
    {
      img: 'images/game-categories/ps-plus.jpg',
      title: 'Helldivers II',
    },
    {
      img: 'images/game-categories/ps4.jpg',
      title: 'Tutti i giochi',
    },
  ];

  carouselItems = [
    {
      img: 'images/gallery-carousel/1.jpg',
      title: 'EA SPORTS FC™ 25',
      price: '€79,99',
    },
    {
      img: 'images/gallery-carousel/2.jpg',
      title: 'Fortnite',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/3.jpg',
      title: 'Assassin’s Creed Shadows',
      price: '€79,99',
    },
    {
      img: 'images/gallery-carousel/4.jpg',
      title: 'Call of Duty®',
      price: '€55,99',
    },
    {
      img: 'images/gallery-carousel/5.jpg',
      title: 'Minecraft',
      price: '€19,99',
    },
    {
      img: 'images/gallery-carousel/6.jpg',
      title: 'The First Berserker: Khazan',
      price: '€59,99',
    },
    {
      img: 'images/gallery-carousel/7.jpg',
      title: 'eFootball™',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/8.jpg',
      title: 'NBA 2K25',
      price: '€23,99',
    },
    {
      img: 'images/gallery-carousel/9.jpg',
      title: 'Grand Theft Auto V ',
      price: '€19,99',
    },
    {
      img: 'images/gallery-carousel/10.jpg',
      title: "Tom Clancy's Rainbow Six® Siege",
      price: '€29,99',
    },
  ];

  currentIndex = 0;
  itemsPerPage = 6;

  //visibleItems: Restituisce una fetta dell'array carouselItems, a partire da currentIndex e includendo itemsPerPage elementi.
  get visibleItems() {
    return this.carouselItems.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
  }

  /*
    Se il carosello ha 9 elementi (carouselItems.length = 9) e itemsPerPage = 6, la funzione imposterà currentIndex = 9 - 6 = 3
    In questo modo, quando visibleItems viene eseguito, restituirà gli ultimi 6 elementi, che vanno dalla posizione 3 fino alla fine dell'array ([4, 5, 6, 7, 8, 9]).
 */
  next() {
    this.currentIndex = this.carouselItems.length - this.itemsPerPage;
  }

  prev() {
    // Imposta currentIndex a 0, mostrando sempre i primi elementi.
    this.currentIndex = 0;
  }
}
