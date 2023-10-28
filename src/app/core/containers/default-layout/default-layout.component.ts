import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SharedModule} from "@shared/shared.module";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    RouterOutlet,
    SharedModule
  ],
  standalone: true
})
export class DefaultLayoutComponent {

}
