import { Component, OnInit } from '@angular/core';
import { BookMovieTicketService } from '../book-movie-ticket.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mumbai',
  templateUrl: './mumbai.component.html',
  styleUrls: ['./mumbai.component.css']
})
export class MumbaiComponent implements OnInit {

  movies;
  movieTheaters = this.bookMovieTicket.theaters;
  constructor(private bookMovieTicket : BookMovieTicketService,
              private route: Router,
              private http : HttpClient) {
               
               }

  ngOnInit() {
    this.getMovieData();
  }
  selectTheater(theater: any){
    this.bookMovieTicket.theaterName= `${theater.theaterName}`;
    this.bookMovieTicket.theaterId= `${theater.theaterId}`;
    this.route.navigateByUrl(`${theater.theaterName}`);
  }
  getMovieData() {
    this.http.get('../../assets/movies.json').subscribe(response => {
      console.log(response);
      this.movies = response;
    });
  }
  isLoggedIn() {
    let userDetails = JSON.parse(localStorage.getItem('userDetails.customer[0]'));
    if (userDetails) {
      return true;
    } else {
      return false;
    }
  }
  book(){
    alert('you must login to book tickets');
    this.route.navigateByUrl('/login');
  }
  bookTicket(movie) {
    this.bookMovieTicket.movieName = `${movie.name}`;
    this.bookMovieTicket.movieId = `${movie.movieId}`;
    this.bookMovieTicket.movieImage = `${movie.image}`;
    
  }
  selectedTheater(theater: any){
    this.bookMovieTicket.theaterName= `${theater.theaterName}`;
    this.bookMovieTicket.theaterId= `${theater.theaterId}`;
    this.route.navigateByUrl('/book-ticket');
  }
}