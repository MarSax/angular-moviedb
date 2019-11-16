import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Results } from '../models/film';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  itemsPerSlide = 3;
  filmSearched: Results[] = [];
  films: Results[] = [];
  query: string = "";

  constructor(private filmService: FilmService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let queryString = params.get('query');
      this.query = queryString;
    });

    if (this.query !== null) {
      this.filmService.getTvByQuery(this.query).
        subscribe(data => {
          this.filmSearched = data;
          console.log(this.router.url);
        });

    } else {
      this.filmService.getAllTv().subscribe(data => {
        this.films = data;
      });
    }
  }

}
