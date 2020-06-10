import { Component, OnInit } from '@angular/core';
import { BookMovieTicketService } from '../book-movie-ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets;
  userId;
  message: any;

  constructor(private bookMovieTicket: BookMovieTicketService) { 
    this.userId = this.bookMovieTicket.userId;
  }

  ngOnInit() {
    this.getTicket();
  }
  deleteTicket(ticket) {
    this.bookMovieTicket.deleteData(ticket).subscribe(res => {
      console.log(res);
      if (res.statusCode === 201) {
        this.tickets.splice(this.tickets.indexOf(ticket), 1);
        this.message = 'ticket has been cancelled and refund initiated';
      }
    });
  }
  getTicket() {
    console.log(this.userId);
    this.bookMovieTicket.getTicket(this.userId).subscribe(response => {
      console.log(response);
      this.tickets = response.ticket;
    });
  }

}
