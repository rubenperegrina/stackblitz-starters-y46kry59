import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show, ShowResponse } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class ShowApiService {
    
  private readonly http = inject(HttpClient);

  getAllShows(page: number): Observable<Show[]> {
    return this.http.get<Show[]>(`https://api.tvmaze.com/shows?page=${page}`);
  }

  searchShows(query: string): Observable<ShowResponse[]> {
    return this.http.get<ShowResponse[]>(`https://api.tvmaze.com/search/shows?q=${query}`);
  }
}