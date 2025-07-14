import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShowFacade } from '../../facades/show.facade';
import { ShowsListComponent } from '../../../../shared/components/shows-list/shows-list.component';

@Component({
  selector: 'tv-show-search',
  templateUrl: `./tv-show-search.component.html`,
  styleUrls: ['./tv-show-search.component.scss'],
  imports: [ShowsListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvShowSearchComponent {
  private readonly showFacade = inject(ShowFacade);

  readonly filteredShows$ = this.showFacade.filteredShows$;

  onInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value.trim();
    this.showFacade.setSearchTerm(query);
  }
}
