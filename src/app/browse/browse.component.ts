import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-browse',
  imports: [CommonModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private gameService: GamesService,
    private destroyRef: DestroyRef
  ) {}

  // takeUntilDestroyed fa in modo di eliminare il subscribe una volta cambiata pagina
  ngOnInit(): void {
    this.gameService
      .getGames()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((games) => {
        this.games = games;
      });
  }
}
