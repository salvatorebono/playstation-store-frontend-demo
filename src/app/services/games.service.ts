import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private apiUrl = 'api';

  games = [
    {
      id: 1,
      img: 'images/gallery-carousel/1.jpg',
      title: 'EA SPORTS FC™ 25',
      price: '€79,99',
      description: 'A football simulation game by EA Sports.',
    },
    {
      id: 2,
      img: 'images/gallery-carousel/2.jpg',
      title: 'Fortnite',
      price: 'Gratis',
      description: 'A popular battle royale game.',
    },
    {
      id: 3,
      img: 'images/gallery-carousel/3.jpg',
      title: 'Assassin’s Creed Shadows',
      price: '€79,99',
      description: 'An action-adventure game in the Assassin’s Creed series.',
    },
    {
      id: 4,
      img: 'images/gallery-carousel/4.jpg',
      title: 'Call of Duty®',
      price: '€55,99',
      description: 'A first-person shooter game.',
    },
    {
      id: 5,
      img: 'images/gallery-carousel/5.jpg',
      title: 'Minecraft',
      price: '€19,99',
      description:
        'A sandbox game about placing blocks and going on adventures.',
    },
    {
      id: 6,
      img: 'images/gallery-carousel/6.jpg',
      title: 'The First Berserker: Khazan',
      price: '€59,99',
      description: 'An action RPG game.',
    },
    {
      id: 7,
      img: 'images/gallery-carousel/7.jpg',
      title: 'eFootball™',
      price: 'Gratis',
      description: 'A free-to-play football simulation game.',
    },
    {
      id: 8,
      img: 'images/gallery-carousel/8.jpg',
      title: 'NBA 2K25',
      price: '€23,99',
      description: 'A basketball simulation game.',
    },
    {
      id: 9,
      img: 'images/gallery-carousel/9.jpg',
      title: 'Grand Theft Auto V ',
      price: '€19,99',
      description: 'An open-world action-adventure game.',
    },
    {
      id: 10,
      img: 'images/gallery-carousel/10.jpg',
      title: "Tom Clancy's Rainbow Six® Siege",
      price: '€29,99',
      description: 'A tactical shooter game.',
    },
  ];

  /* constructor(private http: HttpClient) {} */

  /* Observable<Game[]> indica che il metodo getGames() restituisce un flusso di dati asincrono, ovvero un oggetto Observable che emetterà un array di oggetti Game quando la chiamata HTTP sarà completata con successo */
  getGames(): Observable<Game[]> {
    return of(this.games);

    // Chiamata HTTP GET per ottenere un array di oggetti Game dall'API specificata in apiUrl
    //return this.http.get<Game[]>(this.apiUrl);
  }

  getGameById(id: number): Observable<Game | undefined> {
    return of(this.games).pipe(
      map((games) => games.find((game) => game.id === id))
    );
  }
}
