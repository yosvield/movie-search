import {Component, Input} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-vote-average',
  templateUrl: './vote-average.component.html',
  styleUrls: ['./vote-average.component.scss'],
  imports: [
    DecimalPipe,
    MatProgressSpinnerModule,
    MatTooltipModule,
    TranslateModule
  ],
  standalone: true
})
export class VoteAverageComponent {
  @Input({required: true}) value: number;
  @Input() diameter = 40;
}
