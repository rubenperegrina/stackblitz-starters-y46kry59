import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowDTO } from '../../../features/tv-shows/interfaces';
import { NgOptimizedImage, NgFor, AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
  imports: [NgOptimizedImage, NgFor, AsyncPipe, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowsListComponent {
  @Input() shows$!: Observable<ShowDTO[]>;
}
