import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, forkJoin } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Show, ShowDTO, ShowResponse } from '../interfaces';
import { mapShowResponseToDTO } from '../adapters/show-dto.adapter';
import { liveSearchOperator } from '../../../shared/operators/live-search-operator';
import { CastApiService } from '../services/cast-api.service';
import { ShowApiService } from '../services/show-api.service';

@Injectable({ providedIn: 'root' })
export class ShowFacade {
    private _shows$ = new BehaviorSubject<ShowDTO[]>([]);
    private _filteredShows$ = new BehaviorSubject<ShowDTO[]>([]);

    private showsCache = new Map<number, ShowDTO[]>();

    private readonly searchTerms$ = new Subject<string>();

    private currentPage = 0;
    private loading = false;

    get shows$(): Observable<ShowDTO[]> {
        return this._shows$.asObservable();
    }

    private set shows(show: ShowDTO[]) {
        this._shows$.next(show);
    }

    get filteredShows$(): Observable<ShowDTO[]> {
        return this._filteredShows$.asObservable();
    }

    private set filteredShows(show: ShowDTO[]) {
        this._filteredShows$.next(show);
    }

    private readonly showApi = inject(ShowApiService);
    private readonly castApi = inject(CastApiService);

    constructor() {
      this.searchTerms$.pipe(
        liveSearchOperator(),
        switchMap((query: string) =>
          this.showApi.searchShows(query).pipe(
            switchMap((shows: ShowResponse[]) =>
              forkJoin(
                shows.map(showResponse =>
                  this.castApi.getShowCast(showResponse.show.id).pipe(
                    map(cast => mapShowResponseToDTO(showResponse.show, cast))
                  )
                )
              )
            )
          )
        )
      ).subscribe(showsDTO => this.filteredShows = showsDTO);
    }
    
    setSearchTerm(query: string): void {
      this.searchTerms$.next(query);
    }

    loadAllShows(page: number): void {
      if (this.loading || this.showsCache.has(page)) {
        this.shows = [...this._shows$.value, ...this.showsCache.get(page)!];
        this.currentPage = page;
        return;
      }

      this.loading = true;

      this.showApi.getAllShows(page)
        .pipe(
          map((shows: Show[]) => shows.map(show => mapShowResponseToDTO(show))),
          tap(showsDTO => this.showsCache.set(page, showsDTO))
        )
      .subscribe({
        next: (showsDTO) => {
          this.shows = [...this._shows$.value, ...showsDTO];
          this.currentPage = page;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }

    loadNextPage(): void {
      this.loadAllShows(this.currentPage + 1);
    }
}
