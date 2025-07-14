import { Component } from "@angular/core";
import { ToolbarComponent } from "./shared/components/toolbar/toolbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterOutlet, ToolbarComponent]
})
export class App {
}