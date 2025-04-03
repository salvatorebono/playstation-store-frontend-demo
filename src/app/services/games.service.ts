import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private storageKey = 'games';
  private apiUrl = 'http://localhost:8080/gamestore/api/products/';

  games = [
    {
      id: 1,
      img: 'images/gallery-carousel/1.jpg',
      title: 'EA SPORTS FC™ 25',
      price: 79.99,
      description: 'A football simulation game by EA Sports.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 2,
      img: 'images/gallery-carousel/2.jpg',
      title: 'Fortnite',
      price: 0,
      description: 'A popular battle royale game.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 3,
      img: 'images/gallery-carousel/3.jpg',
      title: 'Assassin’s Creed Shadows',
      price: 79.99,
      description: 'An action-adventure game in the Assassin’s Creed series.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 4,
      img: 'images/gallery-carousel/4.jpg',
      title: 'Call of Duty®',
      price: 55.99,
      description: 'A first-person shooter game.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 5,
      img: 'images/gallery-carousel/5.jpg',
      title: 'Minecraft',
      price: 19.99,
      description:
        'A sandbox game about placing blocks and going on adventures.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 6,
      img: 'images/gallery-carousel/6.jpg',
      title: 'The First Berserker: Khazan',
      price: 59.99,
      description: 'An action RPG game.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 7,
      img: 'images/gallery-carousel/7.jpg',
      title: 'eFootball™',
      price: 0,
      description: 'A free-to-play football simulation game.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 8,
      img: 'images/gallery-carousel/8.jpg',
      title: 'NBA 2K25',
      price: 23.99,
      description: 'A basketball simulation game.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 9,
      img: 'images/gallery-carousel/9.jpg',
      title: 'Grand Theft Auto V ',
      price: 19.99,
      description: 'An open-world action-adventure game.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
    {
      id: 10,
      img: 'images/gallery-carousel/10.jpg',
      title: "Tom Clancy's Rainbow Six® Siege",
      price: 29.99,
      description: 'A tactical shooter game.',
      imgBackground: 'images/game-background-image/1.jpg',
    },
  ];

  constructor(/* private http: HttpClient */) {
    this.loadGamesFromStorage(); // Carica le ricette salvate nel localStorage all'avvio
  }

  /**
   * Metodo per caricare le ricette dal localStorage.
   * Se esistono dati salvati, li carica nel vettore recipes.
   * Altrimenti, salva le ricette predefinite nel localStorage.
   */
  private loadGamesFromStorage() {
    //recupero le ricette dal localStorage
    const storedRecipes = localStorage.getItem(this.storageKey);

    if (storedRecipes) {
      this.games = JSON.parse(storedRecipes);
    } else {
      this.saveGamesToStorage(); // Se non ci sono ricette salvate, salva quelle predefinite
    }
  }

  //Metodo per salvare le ricette attuali nel localStorage.
  private saveGamesToStorage() {
    // localStorage.setItem() ha bisogno di due argomenti:
    // 1. La **chiave** dove vengono  salvati i dati
    // 2. Il **dato** che vogliamo salvare
    localStorage.setItem(this.storageKey, JSON.stringify(this.games));
  }

  /* Observable<Game[]> indica che il metodo getGames() restituisce un flusso di dati asincrono, ovvero un oggetto Observable che emetterà un array di oggetti Game quando la chiamata HTTP sarà completata con successo */
  getGames(): Observable<Game[]> {
    return of(this.games);

    // Chiamata HTTP GET per ottenere un array di oggetti Game dall'API specificata in apiUrl
    /* return this.http.get<Game[]>(this.apiUrl); */
  }

  getGameById(id: number): Observable<Game | undefined> {
    return of(this.games).pipe(
      map((games) => games.find((game) => game.id === id))
    );
  }

  addGame(game: Game) {
    // Valore massimo dell'ID attuale e aggiungi 1
    const newId =
      this.games.length > 0 ? Math.max(...this.games.map((g) => g.id)) + 1 : 1;
    const newGame = { ...game, id: newId };

    this.games.push(newGame);
    this.saveGamesToStorage();
  }

  /*  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  } */

  deleteGame(id: number): Observable<Game[]> {
    // Trova l'indice del gioco da eliminare
    const index = this.games.findIndex((game) => game.id === id);

    // splice per eliminare il gioco
    this.games.splice(index, 1);

    // aggiorno il localStorage
    this.saveGamesToStorage();

    // ritorno l'array aggiornato
    return of(this.games);
  }

  /* deleteGame(game: Game): Observable<Game> {
    return this.http.delete<Game>(this.apiUrl + game.id, game);
  } */

  editGame(game: Game): Observable<Game[]> {
    // Trova l'indice della ricetta da modificare
    const index = this.games.findIndex((r) => r.id === game.id);

    // Aggiorna la ricetta esistente con i nuovi dati
    this.games[index] = game;

    // aggiorno il localStorage
    this.saveGamesToStorage();

    // ritorno l'array aggiornato
    return of(this.games);
  }
}
