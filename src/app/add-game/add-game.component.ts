import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-add-game',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.css',
})
export class AddGameComponent {
  gameForm: FormGroup;

  game = {
    id: 0,
    img: '',
    title: '',
    price: 0,
    description: '',
    imgBackground: '',
  };

  constructor(
    private fb: FormBuilder,
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
        this.game.img = reader.result as string;
        /*   this.gameForm.patchValue({ img: reader.result as string }); */
      };
      //converte l'immagine selezionata dall'utente in un URL base64, permettendo di visualizzare l'immagine nel browser senza bisogno di caricarla su un server.
      reader.readAsDataURL(file);
    }
  }
  // Funzione per gestire il file immagine
  onFileSelected1(event: Event) {
    // Estrae il file selezionato dall'evento
    const file = (event.target as HTMLInputElement).files?.[0];

    // Verifica che effettivamente sia stato selezionato un file
    if (file) {
      // Crea un oggetto FileReader, che serve a leggere i file
      const reader = new FileReader();
      // Quando il file è stato caricato, assegna il risultato alla proprietà img dell'oggetto gameForm
      reader.onload = () => {
        this.game.imgBackground = reader.result as string;
      };
      //converte l'immagine selezionata dall'utente in un URL base64, permettendo di visualizzare l'immagine nel browser senza bisogno di caricarla su un server.
      reader.readAsDataURL(file);
    }
  }

  addGame() {
    if (this.gameForm.valid) {
      this.gamesService.addGame(this.game).subscribe(() => {
        this.router.navigate(['browse']);
      });
    }
  }
}
