import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {CommonModule, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatCardModule
  ],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        if (config.loaderParams && config.loaderParams['selfLoader']) {
          return `assets/img/${config.src}`;
        } else {
          return `https://image.tmdb.org/t/p/w220_and_h330_face${config.src}`;
        }
      }
    }
  ],
  standalone: true
})
export class PosterComponent {
  @Input({required: true}) alt: string;
  @Input({required: true}) poster_path: string;
  width: number = 220;
  height: number = 330;

  NOT_FOUND_IMG = 'not-found-img.jpg';
}
