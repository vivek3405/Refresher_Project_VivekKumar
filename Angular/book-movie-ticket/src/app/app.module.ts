import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { PuneComponent } from './pune/pune.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { BangaloreComponent } from './bangalore/bangalore.component';
import { CityPrideComponent } from './city-pride/city-pride.component';
import { SearchMoviePipe } from './search-movie.pipe';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { InoxPuneComponent } from './inox-pune/inox-pune.component';
import { PvrPuneComponent } from './pvr-pune/pvr-pune.component';
import { CarnivalPuneComponent } from './carnival-pune/carnival-pune.component';
import { PvrMumbaiComponent } from './pvr-mumbai/pvr-mumbai.component';
import { ErosMumbaiComponent } from './eros-mumbai/eros-mumbai.component';
import { SterlingMumbaiComponent } from './sterling-mumbai/sterling-mumbai.component';
import { InoxMumbaiComponent } from './inox-mumbai/inox-mumbai.component';
import { PvrBangaloreComponent } from './pvr-bangalore/pvr-bangalore.component';
import { InoxBangaloreComponent } from './inox-bangalore/inox-bangalore.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    PuneComponent,
    RegisterLoginComponent,
    HomeComponent,
    ProfileComponent,
    MumbaiComponent,
    BangaloreComponent,
    CityPrideComponent,
    SearchMoviePipe,
    BookingComponent,
    TicketComponent,
    InoxPuneComponent,
    PvrPuneComponent,
    CarnivalPuneComponent,
    PvrMumbaiComponent,
    ErosMumbaiComponent,
    SterlingMumbaiComponent,
    InoxMumbaiComponent,
    PvrBangaloreComponent,
    InoxBangaloreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        {path: '', component: HomeComponent},
        {path: 'login', component: RegisterLoginComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'pune', component: PuneComponent},
        {path: 'mumbai', component: MumbaiComponent},
        {path: 'bangalore', component: BangaloreComponent},
        {path: 'City Pride', component: CityPrideComponent},
        {path: 'book-ticket', component: BookingComponent},
        {path: 'ticket', component: TicketComponent},
        {path: 'INOX', component: InoxPuneComponent},
        {path: 'PVR Cinemas', component: PvrPuneComponent},
        {path: 'E Square Carnival', component: CarnivalPuneComponent},
        {path: 'PVR', component: PvrMumbaiComponent},
        {path: 'Eros Cinemas', component: ErosMumbaiComponent},
        {path: 'Sterling Cinemas', component: SterlingMumbaiComponent},
        {path: 'Inox Laseplex', component: InoxMumbaiComponent},
        {path: 'Inox theatre', component: InoxBangaloreComponent},
        {path: 'PVR Kormangla', component: PvrMumbaiComponent},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TestComponent,
    BookingComponent
  ]
})
export class AppModule { }
