import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
}
