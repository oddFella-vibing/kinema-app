import { Component, Input } from '@angular/core';
import { MovieItem } from 'src/app/models/movieItem';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent {
  @Input() movie!: MovieItem;
}
