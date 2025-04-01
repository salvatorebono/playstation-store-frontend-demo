import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-browse',
  imports: [CommonModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  games = [
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
}
