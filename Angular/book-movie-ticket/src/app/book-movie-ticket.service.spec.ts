import { TestBed } from '@angular/core/testing';

import { BookMovieTicketService } from './book-movie-ticket.service';

describe('BookMovieTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookMovieTicketService = TestBed.get(BookMovieTicketService);
    expect(service).toBeTruthy();
  });
});
