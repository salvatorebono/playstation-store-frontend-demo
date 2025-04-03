import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-game-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css',
})
export class GameDetailComponent implements OnInit {
  game: Game | undefined;

  gameDetail = {
    edition: [
      {
        title: 'Standard Edition',
        features: ['EA SPORTS FC™ 25 per PS4 e PS5'],
        price: 79.99,
        img: 'images/edition/1.png',
      },
      {
        title: 'EA SPORTS FC™ 25 SHOWCASE',
        features: ['EA SPORTS FC™ 25 SHOWCASE'],
        price: 0,
        img: 'images/edition/2.png',
      },
      {
        title: 'EA SPORTS FC™ 25 SHOWCASE',
        features: ['EA SPORTS FC™ 25 SHOWCASE'],
        price: 0,
        img: 'images/edition/2.png',
      },
      {
        title: 'Ultimate Edition',
        features: ['EA SPORTS FC™ 25 per PS4 e PS5', '4.600 FC Points'],
        price: 109.99,
        img: 'images/edition/3.png',
      },
    ],
    additional_content: [
      {
        title: 'EA SPORTS FC™ 25 - 5.900 FC Points',
        price: 49.99,
        img: 'images/additional-content/1.jpg',
      },
      {
        title: 'EA SPORTS FC™ 25 - 12.000 FC Points',
        price: 99.99,
        img: 'images/additional-content/2.jpg',
      },
      {
        title: 'EA SPORTS FC™ 25 - 18.500 FC Points',
        price: 149.99,
        img: 'images/additional-content/3.jpg',
      },
      {
        title: 'EA SPORTS FC™ 25 - 2.800 FC Points',
        price: 24.99,
        img: 'images/additional-content/4.jpg',
      },
      {
        title: 'EA SPORTS FC™ 25 - 1.050 FC Points',
        price: 9.99,
        img: 'images/additional-content/5.jpg',
      },
      {
        title: 'EA SPORTS FC™ 25 - 1.600 FC Points',
        price: 14.99,
        img: 'images/additional-content/6.jpg',
      },
    ],
  };

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);

    this.gamesService.getGameById(id).subscribe((game) => {
      this.game = game;
    });
  }
}
