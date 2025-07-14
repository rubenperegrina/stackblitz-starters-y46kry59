import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CastResponse } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class CastApiService {
    
  private readonly http = inject(HttpClient);

  getShowCast(showId: number): Observable<CastResponse[]> {
    return this.http.get<CastResponse[]>(`https://api.tvmaze.com/shows/${showId}/cast`);
  }
}