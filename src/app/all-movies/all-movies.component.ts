import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { MovieModel } from '../movie.model';
import {FavouriteMoviesService} from '../favourite-movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  movies: MovieModel[];
  horrorMovies: MovieModel[];
  romanceMovies: MovieModel[];
  dramaMovies: MovieModel[];
  otherMovies: MovieModel[];

  favouriteMovie: MovieModel[] = [];


  constructor(
    private movieService: MoviesApiService, 
    private favouriteMoviesService: FavouriteMoviesService
    ) { }

  ngOnInit() {
    this.movies = this.movieService.movies.slice();
    this.horrorMovies = this.movies.splice(5,4);
    this.romanceMovies = this.movies.splice(5,4);
    this.dramaMovies = this.movies.splice(5,4);
    this.otherMovies = this.movies.splice(0,8);

    this.favouriteMovie = this.favouriteMoviesService.favouriteMovies;

  }


   onShowMovie(id: number) {
    this.movieService.showModal(id)

   }

   onAddToFavourite(id: number) {
    this.favouriteMoviesService.addToFavourite(id);
    
   }

   isFav(id: number) :boolean{
     return this.favouriteMoviesService.isInFav(id)
   }

}
