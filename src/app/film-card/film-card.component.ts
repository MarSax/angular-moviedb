import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../models/film';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film;

  base_path: string = environment.BASE_IMG_URL;

  constructor() { }

  ngOnInit() { }

}
