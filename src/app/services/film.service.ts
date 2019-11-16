import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film, Results, FilmDetail } from '../models/film';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _endpoint = environment.BASE_URL + '/discover/tv?api_key=' + environment.API_KEY + '&language=en-US';

  constructor(private http: HttpClient) { }

  getAllTv(): Observable<Results[]> {
    return this.http.get<Results[]>(this._endpoint);
  }

  //https://api.themoviedb.org/3/tv/1412?api_key=0cc05e59776de4c787d49cd952d0c950&language=en-US&page=1
  getTvById(id: number): Observable<FilmDetail> {
    return this.http.get<FilmDetail>(environment.BASE_URL + '/tv/' + id + '?api_key=' + environment.API_KEY + '&language=en-US');
  }

  getTvByQuery(query: string): Observable<Results[]> {
    return this.http.get<Results[]>(environment.BASE_URL + '/search/tv/' + '?api_key=' + environment.API_KEY + '&query=' + query + '&language=en-US');
  }
}
