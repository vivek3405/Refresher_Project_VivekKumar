import { Component, OnInit } from '@angular/core';
import { BookMovieTicketService } from '../book-movie-ticket.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name;
  mobile;
  email;
  userId = this.bookMovieTicket.userId;
  adminService: any;
  message: any;
  constructor(private bookMovieTicket: BookMovieTicketService,
    public http: HttpClient, private router: Router) {
    this.name = this.bookMovieTicket.userName;
    this.mobile = this.bookMovieTicket.userMobile;
    this.email = this.bookMovieTicket.userEmail;
  }

  ngOnInit() {
  }
  updatePassword(form: NgForm) {

    this.bookMovieTicket.updatePassword(form.value).subscribe(res => {
      console.log(res);
      if (res.statusCode === 201) {
        form.reset();
        localStorage.removeItem('userDetails.customer[0]');
        alert('password has been changed');
      }
    });
  }
  deactivate() {
    confirm('Are you sure?');
    this.bookMovieTicket.deactivateAccount(this.userId).subscribe(res => {
      console.log(res);
      if (res.statusCode === 201) {
        localStorage.removeItem('userDetails.customer[0]');
        this.router.navigateByUrl('/login');
      }
    });
  }
}
