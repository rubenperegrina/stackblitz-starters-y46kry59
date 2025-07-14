import { ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ShowFacade } from '../../facades/show.facade';
import { ShowsListComponent } from '../../../../shared/components/shows-list/shows-list.component';

@Component({
  selector: 'app-all-shows',
  imports: [ShowsListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <div #scrollContainer class="scroll-container" (scroll)="onScroll()">
      <app-shows-list [shows$]="shows$"></app-shows-list>
    </div>
  `,
    styles: [`
  .scroll-container {
    height: calc(100vh - 64px);
    overflow-y: auto;
  }
    `]
})
export class AllShowsComponent implements OnInit {
  private readonly showFacade = inject(ShowFacade)

  readonly shows$ = this.showFacade.shows$;
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.showFacade.loadAllShows(0);
  }

  onScroll(): void {
    const el = this.scrollContainer.nativeElement;
    const threshold = 150;

    if (el.scrollHeight - el.scrollTop - el.clientHeight < threshold) {
      this.showFacade.loadNextPage();
    }
  }
}
