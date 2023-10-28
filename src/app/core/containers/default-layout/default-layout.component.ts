import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {App} from "../../../config/app";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    RouterOutlet,
    SharedModule,
    RouterLink
  ],
  standalone: true
})
export class DefaultLayoutComponent {

  protected readonly App = App;
}
