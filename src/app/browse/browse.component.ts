import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { Game } from '../models/game.model';
import { GamesService } from '../services/games.service';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-browse',
  imports: [CommonModule, RouterModule],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent implements OnInit {
  showModal = false;
  confirmDelete = false;
  games: Game[] = [];

  constructor(
    private titleService: TitleService,
    private gamesService: GamesService,
    private destroyRef: DestroyRef
  ) {}

  // takeUntilDestroyed fa in modo di eliminare il subscribe una volta cambiata pagina
  ngOnInit(): void {
    this.titleService.setTitle(
      'Tutti i giochi | PlayStation™Store ufficiale Italia'
    );

    this.gamesService
      .getGames()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((games) => {
        this.games = games;
      });
  }

  deleteGame(item: number) {
    this.gamesService.deleteGame(item).subscribe((games) => {
      this.games = games;
    });
  }

  /* deleteGame(item: number) {
    this.showModal = true;
    if (this.confirmDelete) {
      this.showModal = false;
      this.gamesService.deleteGame(item).subscribe((games) => {
        this.games = games;
      });
    }
  } */
}
