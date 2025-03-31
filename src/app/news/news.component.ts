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
      img: 'images/astrobot.jpg',
      title: 'Astrobot',
    },
    {
      img: 'images/spider-man.jpg',
      title: 'Spider-Man 2',
    },
    {
      img: 'images/2k25.jpg',
      title: '2K25',
    },
    {
      img: 'images/horizon.jpg',
      title: 'Horizon',
    },
    {
      img: '/images/helldivers.jpg',
      title: 'Helldivers II',
    },
    {
      img: '/images/ronin.jpg',
      title: 'Rise of The Ronin',
    },
  ];
}
