import { Component, OnInit, Input } from '@angular/core';
import { FilmDetail } from '../models/film';
import { environment } from '../../environments/environment.prod';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  base_path: string = environment.BASE_IMG_URL;
  filmId: number;
  film: FilmDetail;
  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.filmId = id;
    });

    this.filmService.getTvById(this.filmId).subscribe(data => {
      console.log(data);
      this.film = data;
    });
  }

}
