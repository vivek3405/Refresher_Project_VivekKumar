import { Component, OnInit } from '@angular/core';
import { BookMovieTicketService } from '../book-movie-ticket.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carnival-pune',
  templateUrl: './carnival-pune.component.html',
  styleUrls: ['./carnival-pune.component.css']
})
export class CarnivalPuneComponent implements OnInit {

  movies;
  constructor(private http: HttpClient, 
              private route: Router, 
              private bookMovieTicket: BookMovieTicketService) { 
              this.getMovieData();
  }

  ngOnInit() {
  }
  getMovieData() {
    this.http.get('../../assets/movies.json').subscribe(response => {
      console.log(response);
      this.movies = response;
    });
  }
  bookTicket(movie) {
    this.bookMovieTicket.movieName = `${movie.name}`;
    this.bookMovieTicket.movieId = `${movie.movieId}`;
    this.bookMovieTicket.movieImage = `${movie.image}`;

    this.route.navigateByUrl('/book-ticket');
  }
  book() {
    alert('you must login first');
    this.route.navigateByUrl('/login');
  }
  isLoggedIn() {
    let userDetails = JSON.parse(localStorage.getItem('userDetails.customer[0]'));
    if (userDetails) {
      return true;
    } else {
      return false;
    }
  }

}
