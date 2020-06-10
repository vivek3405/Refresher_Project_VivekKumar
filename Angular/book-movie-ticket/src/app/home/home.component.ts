import { Component, OnInit } from '@angular/core';
import { BookMovieTicketService } from '../book-movie-ticket.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies;
  constructor(private http: HttpClient,private dialog: MatDialog) { 
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
  book(){
    alert('choose your location to continue');
    this.dialog.open(TestComponent);

  }
  
}
