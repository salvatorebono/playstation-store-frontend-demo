import { Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { BrowseComponent } from './browse/browse.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { LatestComponent } from './latest/latest.component';

export const routes: Routes = [
  // quando il percorso è vuoto (''), l'utente deve essere reindirizzato a /latest.
  { path: '', redirectTo: '/latest', pathMatch: 'full' },
  { path: 'latest', component: LatestComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'add-game', component: AddGameComponent },
];
