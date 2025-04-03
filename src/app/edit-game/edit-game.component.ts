import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-edit-game',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './edit-game.component.html',
  styleUrl: './edit-game.component.css',
})
export class EditGameComponent implements OnInit {
  gameForm: FormGroup;
  gameId: number | null = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private router: Router
  ) {
    this.gameForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      img: ['', Validators.required],
      imgBackground: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      //Recupero il valore del parametro 'id' dalla URL
      const id = Number(params.get('id'));
      this.gameId = id;
      //Controllo se l'id è presente
      if (id) {
        // Chiama il servizio per ottenere il game con l'id specificato
        this.gamesService.getGameById(id).subscribe((game) => {
          // Controllo se il game esiste
          if (game) {
            // Copio i dati della game nel nuovo game
            this.gameForm.patchValue({
              title: game.title,
              price: game.price,
              description: game.description,
              img: game.img,
              imgBackground: game.imgBackground,
            });
          }
        });
      }
    });
  }
  // Funzione per gestire il file immagine
  onFileSelected(event: Event) {
    // Estrae il file selezionato dall'evento
    const file = (event.target as HTMLInputElement).files?.[0];

    // Verifica che effettivamente sia stato selezionato un file
    if (file) {
      // Crea un oggetto FileReader, che serve a leggere i file
      const reader = new FileReader();
      // Quando il file è stato caricato, assegna il risultato alla proprietà img dell'oggetto gameForm
      reader.onload = () => {
        this.gameForm.patchValue({ img: reader.result as string });
      };
      //converte l'immagine selezionata dall'utente in un URL base64, permettendo di visualizzare l'immagine nel browser senza bisogno di caricarla su un server.
      reader.readAsDataURL(file);
    }
  }

  editGame() {
    //per includere anche l'ID del gioco
    const updatedGame = {
      ...this.gameForm.value,
      id: this.gameId,
    };
    // Chiamo il servizio per modificare il gioco
    this.gamesService.editGame(updatedGame);
    // Reindirizza alla pagina del gioco modificato
    this.router.navigate(['game/' + this.gameId]);
  }
}
