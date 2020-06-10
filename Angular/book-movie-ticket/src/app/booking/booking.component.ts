import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookMovieTicketService } from '../book-movie-ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  total=0;
  message: any;
  error: any;
  carrier = 0;
  carrierDate = null;
  carrierTime = null;
  theaterName = this.bookMovieTicket.theaterName;
  theaterId = this.bookMovieTicket.theaterId;
  movieName = this.bookMovieTicket.movieName;
  movieId = this.bookMovieTicket.movieId;
  image = this.bookMovieTicket.movieImage;
  userId = this.bookMovieTicket.userId;
  bookingId = `${this.bookMovieTicket.movieId}${this.bookMovieTicket.theaterId}`;

  constructor(private bookMovieTicket: BookMovieTicketService,
              private router: Router) { }

  ngOnInit() {
  }
  cost(){
    this.total=150;
    this.carrier = 1;

  }
  costA(){
    this.total=300;
    this.carrier = 2;

  }
  costB(){
    this.total=450;
    this.carrier = 2;

  }
  time(){
    this.carrierTime = "12";
  }
  timeA(){
    this.carrierTime = "2";
  }
  timeB(){
    this.carrierTime = "4";
  }
  date(){
    this.carrierDate = "09/06/2020";
  }
  dateA(){
    this.carrierDate = "10/06/2020";
  }
  dateB(){
    this.carrierDate = "10/06/2020";
  }
  addTicket(form: NgForm) {
    this.bookMovieTicket.postTicket(form.value).subscribe(data => {
      if (data.statusCode === 201){
        console.log(data);
        this.message = 'Your Ticket has been booked ;) enjoy';
      } else{
        console.log(data);
        this.error = data.message;
      }
      form.reset();
    });
  }
  ticket(){
    this.router.navigateByUrl('ticket');
  }

}
