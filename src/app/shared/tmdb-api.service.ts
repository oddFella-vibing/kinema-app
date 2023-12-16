import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../models/movieData';
import { catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TmdbApiService {
  API_URL = 'https://api.themoviedb.org/3/movie/';
  API_Key: string =
    '?api_key=14a5583a23c71bf89ef8d3748b3f8221&language=en-US&page=1';

  responseMovieList: MovieData[] = [];

  constructor(private http: HttpClient) {}

  getMovieList(term:string) {
    return this.http.get(this.API_URL + term + this.API_Key);
  }

  getMovie(movie_id: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        movie_id +
        '?api_key=14a5583a23c71bf89ef8d3748b3f8221&language=en-US&append_to_response=credits'
    );
  }
  searchMovie(title:string){
    return this.http.get(
     ' https://api.themoviedb.org/3/search/movie?api_key=14a5583a23c71bf89ef8d3748b3f8221&query='+title
    )
  }
}
