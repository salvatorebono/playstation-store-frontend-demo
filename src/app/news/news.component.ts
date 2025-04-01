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
}
