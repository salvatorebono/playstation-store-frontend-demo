import { Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { LatestComponent } from './latest/latest.component';

export const routes: Routes = [
  // quando il percorso è vuoto (''), l'utente deve essere reindirizzato a /latest.
  { path: '', redirectTo: '/latest', pathMatch: 'full' },
  { path: 'latest', component: LatestComponent },
  { path: 'browse', component: BrowseComponent },
];
