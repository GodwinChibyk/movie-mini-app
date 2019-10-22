import { Injectable, EventEmitter } from '@angular/core';
import { movies } from './data/movies';
import { MovieModel } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  onShowModal = new EventEmitter<MovieModel>();

  movies: MovieModel[];
  constructor() {
    this.movies = movies;
  }

  showModal(id: number) {
    let modalMovie: MovieModel = this.movies.filter(m => m.id === id)[0];
    this.onShowModal.emit(modalMovie);
  }

  favouriteVid(id: number){
    
  }

}
