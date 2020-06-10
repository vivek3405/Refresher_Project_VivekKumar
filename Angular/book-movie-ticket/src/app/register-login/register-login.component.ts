import { Component, OnInit } from '@angular/core';
import { BookMovieTicketService } from '../book-movie-ticket.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  bookMyDoc: any;
  message: any;
  error: any;

  constructor(private bookMovieTicket: BookMovieTicketService,
    private router: Router) { }

  ngOnInit() {
  }
  login(form: NgForm) {
    this.bookMovieTicket.loginUser(form.value).subscribe(res => {


      console.log(res);
      if (res.statusCode === 201) {
        form.reset();
        this.bookMovieTicket.userName = res.customer[0].fullName;
        this.bookMovieTicket.userId = res.customer[0].userId;
        this.bookMovieTicket.userMobile = res.customer[0].mobileNumber;
        this.bookMovieTicket.userEmail = res.customer[0].emailId;
        this.message = res.description;
        setTimeout(() => {
          this.message = null;
        }, 5000);
        console.log(res);
        localStorage.setItem('userDetails.customer[0]', JSON.stringify(res));
        console.log('user details stored in local storage');
        this.router.navigateByUrl(`${this.bookMovieTicket.theaterCity}`);
      } else {
        form.reset();
        this.error = 'username and password not matched';
        setTimeout(() => {
          this.error = null;
        }, 5000);

      }

    });
  }
  register(form: NgForm) {
    this.bookMovieTicket.postUser(form.value).subscribe(data => {
      if (data.statusCode === 201) {
        console.log(data);
        this.message = data.message;
      } else {
        console.log(data);
        this.error = data.message;
      }
      setTimeout(() => {
        this.message = null;
      }, 2000);
      form.reset();
    });
  }
  navigate(){
    this.router.navigateByUrl('login');
  }

}
