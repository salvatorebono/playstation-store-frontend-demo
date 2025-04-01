import { Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'browse', component: BrowseComponent },
];
