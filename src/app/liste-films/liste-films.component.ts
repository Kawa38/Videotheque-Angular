import { Component, Input } from '@angular/core';
import { Film } from '../models/liste-films.model'

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css'], 
})
// Nous avons une classe film à instancier
export class ListeFilmsComponent {

  @Input() instanceFilm!: Film;
}

