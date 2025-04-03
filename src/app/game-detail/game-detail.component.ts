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
        title: 'Standard Edition',
        features: ['EA SPORTS FC™ 25 per PS4 e PS5'],
        price: 79.99,
        img: 'images/edition/1.png',
      },
      {
        title: 'Standard Edition',
        features: ['EA SPORTS FC™ 25 per PS4 e PS5'],
        price: 79.99,
        img: 'images/edition/1.png',
      },
    ],
    additional_content: [{}],
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
