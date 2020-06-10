import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { TestComponent } from '../test/test.component';
import { Router } from '@angular/router';
import { BookMovieTicketService } from '../book-movie-ticket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, private bookMovieTicket: BookMovieTicketService){
    
    this.openDialog();

  }

  ngOnInit() {
  }
  openDialog() {
    this.dialog.open(TestComponent);
  }
  isLoggedIn() {
    let userDetails = JSON.parse(localStorage.getItem('userDetails.customer[0]'));
    if (userDetails) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('userDetails.customer[0]');
    this.router.navigateByUrl(`${this.bookMovieTicket.theaterCity}`);
  }
  location(){
    if(this.bookMovieTicket.theaterCity=='pune'){
      return true;
    }else{
      return false;
    }
  }
  locationBangalore(){
    if(this.bookMovieTicket.theaterCity=='bangalore'){
      return true;
    }else{
      return false;
    }
  }
  locationMumbai(){
    if(this.bookMovieTicket.theaterCity=='mumbai'){
      return true;
    }else{
      return false;
    }
  }
  brand(){
  if( this.bookMovieTicket.theaterCity =='pune' || this.bookMovieTicket.theaterCity=='mumbai'|| this.bookMovieTicket.theaterCity=='bangalore') {
    return false;
    }else{
      return true;
    }
  }
}
