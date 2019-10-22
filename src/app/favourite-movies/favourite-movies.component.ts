import { Component, OnInit } from '@angular/core';
import { FavouriteMoviesService } from '../favourite-movies.service';
import { MovieModel } from '../movie.model';
import {MoviesApiService} from '../movies-api.service'

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {

  favouriteMovies : MovieModel[];
  constructor(
    private favouriteService: FavouriteMoviesService,
    private movieService: MoviesApiService
    ) {
   }

  ngOnInit() {
    this.favouriteMovies = this.favouriteService.favouriteMovies
  }

  onShowMovie(id: number) {
    this.movieService.showModal(id)

   }

   removeFav(id: number){
     this.favouriteMovies = this.favouriteService.removeFromFav(id)
   }

}
