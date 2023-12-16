import { Component, Input, OnInit } from '@angular/core';
import { TmdbApiService } from 'src/app/shared/tmdb-api.service';
import { MovieData } from 'src/app/models/movieData';


import { Observable } from 'rxjs';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movieList: MovieData[] = [];

  constructor() {
    
  }
  ngOnInit(): void {}
}
