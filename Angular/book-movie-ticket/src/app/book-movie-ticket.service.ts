import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookMovieTicketService {

  userName;
  userId;
  userMobile;
  userEmail;
  theaterCity;
  theaters;
  theaterName;
  theaterId;
  movieName;
  movieImage;
  movieId;
  tickets;
  api = `http://localhost:8080`;

  constructor(private http: HttpClient) { }

  loginUser(userDetails): Observable<any>{
    return this.http.post<any>(`${this.api}/login-user`, userDetails);
  }
  getTheater(search): Observable<any> {
    return this.http.get<any>(`${this.api}/search-theater/${search}`);
  }
  postTicket(request): Observable<any> {
    return this.http.post<any>(`${this.api}/add-`, request);
  }
  getTicket(search): Observable<any> {
    return this.http.get<any>(`${this.api}/search-ticket/${search}`);
  }
  updatePassword(user): Observable<any>{
    return this.http.put<any>(
      `${this.api}/modify-password`, user);
  }
  postUser(request): Observable<any> {
    return this.http.post<any>(`${this.api}/register-user`, request);
  }
  deactivateAccount(userId): Observable<any>{
    return this.http.delete<any>(`${this.api}/deactivate-account/${userId}`);
  }
  deleteData(ticket): Observable<any>{
    return this.http.delete<any>(`${this.api}/delete-ticket/${ticket}`);
  }
}
