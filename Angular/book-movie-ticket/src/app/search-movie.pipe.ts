import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {

  transform(movies: any, search: string): any {
    if (search === undefined) {
      return movies;
    } else {
      return movies.filter((movie, index) => {
        return movie.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }

}

