import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-news',
  imports: [CommonModule, CarouselComponent],
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
  carouselItems1 = [
    {
      img: 'images/gallery-carousel/11.jpg',
      title: 'Assassin’s Creed Shadows',
      price: '€79,99',
    },
    {
      img: 'images/gallery-carousel/12.jpg',
      title: 'The First Berserker: Khazan',
      price: '€59,99',
    },
    {
      img: 'images/gallery-carousel/13.jpg',
      title: 'Split Fiction',
      price: '€49,99',
    },
    {
      img: 'images/gallery-carousel/14.jpg',
      title: 'WWE 2K25',
      price: '€74,99',
    },
    {
      img: 'images/gallery-carousel/15.jpg',
      title: 'Atomfall',
      price: '€59,99',
    },
    {
      img: 'images/gallery-carousel/16.jpg',
      title: 'BLEACH Rebirth of Souls',
      price: '€69,99',
    },
    {
      img: 'images/gallery-carousel/17.jpg',
      title: 'Age of Mythology: Retold',
      price: '€29,99',
    },
    {
      img: 'images/gallery-carousel/18.jpg',
      title: 'AI LIMIT',
      price: '€34,99',
    },
    {
      img: 'images/gallery-carousel/19.jpg',
      title: 'MLB® The Show™ 25',
      price: '€69,99',
    },
    {
      img: 'images/gallery-carousel/20.jpg',
      title: 'Karma: The Dark World',
      price: '€24,99',
    },
    {
      img: 'images/gallery-carousel/21.jpg',
      title: 'War Robots: Frontiers',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/33.jpg',
      title: 'The Last of Us™ Part II',
      price: '€49,99',
    },
  ];
  carouselItems2 = [
    {
      img: 'images/gallery-carousel/22.jpg',
      title: 'F1® 25 Iconic Edition',
      price: '€99,99',
    },
    {
      img: 'images/gallery-carousel/23.jpg',
      title: 'Forza Horizon 5 Premium Edition',
      price: '€99,99',
    },
    {
      img: 'images/gallery-carousel/24.jpg',
      title: 'Forza Horizon 5 Standard Edition',
      price: '€69,99',
    },
    {
      img: 'images/gallery-carousel/25.jpg',
      title: 'Indiana Jones e l’antico Cerchio',
      price: '€79,99',
    },
    {
      img: 'images/gallery-carousel/26.jpg',
      title: 'Indiana Jones e l’antico Cerchio Premium Edition',
      price: '€19,99',
    },
    {
      img: 'images/gallery-carousel/27.jpg',
      title: 'DEATH STRANDING 2: ON THE BEACH Digital Deluxe',
      price: '€89,99',
    },
    {
      img: 'images/gallery-carousel/28.jpg',
      title: 'Clair Obscur: Expedition 33',
      price: '€49,99',
    },
    {
      img: 'images/gallery-carousel/29.jpg',
      title: 'ELDEN RING NIGHTREIGN Deluxe Edition',
      price: '€69,99',
    },
    {
      img: 'images/gallery-carousel/30.jpg',
      title: 'F1® 25 Standard Edition',
      price: '€79,99',
    },
    {
      img: 'images/gallery-carousel/32.jpg',
      title: 'Days Gone Remastered',
      price: '€49,99',
    },
    {
      img: 'images/gallery-carousel/34.jpg',
      title: 'METAL GEAR SOLID Δ: SNAKE EATER',
      price: '€89,99',
    },
    {
      img: 'images/gallery-carousel/35.jpg',
      title: 'DOOM: The Dark Ages Premium Edition',
      price: '€109,99',
    },
  ];
  carouselItems3 = [
    {
      img: 'images/gallery-carousel/36.jpg',
      title: 'Silent Operative Demo',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/37.jpg',
      title: 'Vagrus - The Riven Realms Prologue',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/38.jpg',
      title: 'Boxville 2',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/39.jpg',
      title: 'Balance Blox Demo',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/40.jpg',
      title: 'Quriocity',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/41.jpg',
      title: 'Tainted Grail: Fall of Avalon',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/42.jpg',
      title: 'Smells Like a Mushroom Demo',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/43.jpg',
      title: 'Galactic Guardian - DEMO',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/44.jpg',
      title: 'The Jumping Burger Rush - DEMO',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/45.jpg',
      title: 'Atelier Yumia: The Alchemist of Memories & the Envisioned Land',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/46.jpg',
      title: 'Karma: The Dark World Demo',
      price: 'Gratis',
    },
    {
      img: 'images/gallery-carousel/47.jpg',
      title: 'Pipistrello and the Cursed Yoyo',
      price: 'Gratis',
    },
  ];
}
