import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookMovieTicketService } from '../book-movie-ticket.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  cityName = 'mumbai';
  constructor(public http: HttpClient,
              public route: Router,
              private bookMovieTicket: BookMovieTicketService) { }

  ngOnInit() {
  }
 
  searchTheaterPune() {
    console.log(this.bookMovieTicket.theaterCity);
    this.bookMovieTicket.getTheater(this.bookMovieTicket.theaterCity).subscribe(response => {
      console.log(response);
      this.bookMovieTicket.theaters = response.customer;
      this.route.navigateByUrl('/pune');
    });
  }
  searchTheaterBangalore() {
    console.log(this.bookMovieTicket.theaterCity);
    this.bookMovieTicket.getTheater(this.bookMovieTicket.theaterCity).subscribe(response => {
      console.log(response);
      this.bookMovieTicket.theaters = response.customer;
      this.route.navigateByUrl('/bangalore');
    });
  }
  bangaloreTheater() {
    console.log('in bangalore');
    this.bookMovieTicket.theaterCity='bangalore';
    this.searchTheaterBangalore();
  }
  puneTheater() {
    console.log('in pune');
    this.bookMovieTicket.theaterCity='pune';
    this.searchTheaterPune();
  }
  mumbaiTheater(){
    this.bookMovieTicket.theaterCity='mumbai';
    this.searchTheaterMumbai();
  }
  searchTheaterMumbai() {
    console.log(this.bookMovieTicket.theaterCity);
    this.bookMovieTicket.getTheater(this.bookMovieTicket.theaterCity).subscribe(response => {
      console.log(response);
      this.bookMovieTicket.theaters = response.customer;
      this.route.navigateByUrl('/mumbai');
    });
  }
}
