import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from 'src/app/shared/tmdb-api.service';
import { MovieData } from 'src/app/models/movieData';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieList: MovieData[] = [];
  constructor(public movieapiService: TmdbApiService) {}
  ngOnInit(): void {
    this.movieapiService.getMovieList().subscribe((res: any) => {
      this.movieList = res.results;
      console.log(this.movieList[0]);
    });
    
  }
}
