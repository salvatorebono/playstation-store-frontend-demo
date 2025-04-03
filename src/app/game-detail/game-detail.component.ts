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
