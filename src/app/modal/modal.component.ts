import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../movies-api.service';
import { MovieModel } from '../movie.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  showModal: string | null = '';
  modalMovie: MovieModel;
  constructor(private movieService: MoviesApiService) { }

  ngOnInit() {
    this.movieService.onShowModal.subscribe((movie: MovieModel) => {
      this.modalMovie = movie;
      this.showModal = 'open-movie'
    })
  }

  closeModal() {
    this.showModal = null
  }
}
