import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetaiedData } from 'src/app/models/movieDetailedData';
import { TmdbApiService } from 'src/app/shared/tmdb-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie_id!: any;
  movie_data!: MovieDetaiedData;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieapiService: TmdbApiService
  ) {}
  ngOnInit(): void {
    this.movie_id = this.activatedRoute.snapshot.params['id'];
    this.movieapiService.getMovie(this.movie_id).subscribe((res: any) => {
      console.log(res);
      this.movie_data = {
        title: res.title,
        adult: res.adult,
        backdrop_path: res.backdrop_path,
        genres: res.genres,
        id: res.id,
        original_title: res.original_title,
        overview: res.overview,
        popularity: res.popularity,
        poster_path: res.poster_path,
        release_date: res.release_date,
        tagline: res.tagline,
        runtime: res.tagline,
        homepage: res.homepage,
      };
    });
  }
}
