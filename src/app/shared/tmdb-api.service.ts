import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../models/movieData';
import { catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TmdbApiService {
  API_URL =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=14a5583a23c71bf89ef8d3748b3f8221&language=en-US&page=1';

  responseMovieList: MovieData[] = [];

  constructor(private http: HttpClient) {}

  getMovieList() {
    return this.http.get(this.API_URL);
  }
  getMovie(movie_id: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        movie_id +
        '?api_key=14a5583a23c71bf89ef8d3748b3f8221&language=en-US'
    );
  }
}
