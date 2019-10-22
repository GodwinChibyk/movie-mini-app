import { Injectable} from '@angular/core';
import { movies } from './data/movies';
import { MovieModel } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMoviesService {


  // favouriteMovies: MovieModel[] = [];
  private movies: MovieModel[]
  constructor() { 
    this.movies = movies;
  }

  set favouriteMovies(value: MovieModel[]) {
    sessionStorage.setItem('data', JSON.stringify(value))
  }


  get favouriteMovies(): MovieModel[] {
        
    return sessionStorage.getItem('data') ? JSON.parse(sessionStorage.getItem('data')) : []
  }

  addToFavourite(id: number) {
    let favouriteMovie: MovieModel = this.movies.filter(m => m.id === id)[0];

    let currentVideoId = favouriteMovie.id;
    
    let isMovieInFav = this.favouriteMovies.filter(v => v.id == currentVideoId);

    if(isMovieInFav.length > 0) return;

    this.favouriteMovies = [...this.favouriteMovies, favouriteMovie];

  }

  removeFromFav(id: number) {
    this.favouriteMovies = [...this.favouriteMovies.filter(m => m.id !== id)];
    
    return this.favouriteMovies

  }

  isInFav(id: number): boolean{
    let fav = this.favouriteMovies.filter(m => m.id === id);
    if(fav.length > 0) return true
    return false;
  }

}
