import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieModel } from '../movie.model';
import { MoviesApiService } from '../movies-api.service';
import {FavouriteMoviesService} from '../favourite-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: MovieModel[];

  constructor(
    private route: ActivatedRoute, 
    private movieService: MoviesApiService,
    private favouriteMoviesService: FavouriteMoviesService
    ) {

   }

  ngOnInit() {
    let searchString = this.route.snapshot.queryParams['query'];
    
    let regex = new RegExp(searchString, 'gmi')

    this.searchResult = this.movieService.movies.filter( (m: MovieModel) => {

      if(m.title.search(regex) > -1){
        return m
      } 
    })


    this.route.queryParams.subscribe((params: Params) => {
      searchString = params['query']
      let regex = new RegExp(searchString,'gmi')
      this.searchResult = this.movieService.movies.filter( (m: MovieModel) => {
        if(searchString == '' || !this.route.snapshot.queryParams['query']) return;

        if(m.title.search(regex) > -1){
          return m
        } 
      })

    })
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
