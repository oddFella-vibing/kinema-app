import { Component } from '@angular/core';
import { TmdbApiService } from '../shared/tmdb-api.service';
import { MovieData } from '../models/movieData';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  popular_movie_list: MovieData[] = [];
  toprated_movie_list: MovieData[] = [];
  now_playing_movie_list: MovieData[] = [];
  upcoming_movie_list: MovieData[] = [];
  searchItems: MovieData[] = [];
  searchInput: string = '';
  faSearch = faSearch;
  search_boolean = false;
  constructor(public movieapiService: TmdbApiService) {}
  ngOnInit(): void {
    this.getData();
  }
  onClear() {
    if (this.searchInput === '') {
      this.searchItems = [];
    }
  }
  onSearch() {
    if (this.searchInput !== '') {
      this.search_boolean = true;
    }

    this.movieapiService.searchMovie(this.searchInput).subscribe((res: any) => {
      this.searchItems = res.results;
    });
  }
  getData() {
    this.movieapiService.getMovieList('top_rated').subscribe((res: any) => {
      this.toprated_movie_list = res.results;
    });
    this.movieapiService.getMovieList('popular').subscribe((res: any) => {
      this.popular_movie_list = res.results;
    });
    this.movieapiService.getMovieList('upcoming').subscribe((res: any) => {
      this.upcoming_movie_list = res.results;
    });
    this.movieapiService.getMovieList('now_playing').subscribe((res: any) => {
      this.now_playing_movie_list = res.results;
    });
  }
}
