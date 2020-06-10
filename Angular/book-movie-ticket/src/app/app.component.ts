import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-movie-ticket';
  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    this.dialog.open(TestComponent);
  }
}
