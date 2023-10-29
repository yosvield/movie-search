import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {CoreModule} from "@core/core.module";
import {SharedModule} from "@shared/shared.module";
import {NgCacheRouteReuseStoreService} from "@core/services/ng-cache-route-reuse-store.service";
import {NgCacheRouteReuseService} from "@core/services/ng-cache-route-reuse.service";
import {RouteReuseStrategy} from "@angular/router";
import {NgCacheRouteReuseStrategy} from "@core/services/ng-cache-route-reuse.strategy";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

    CoreModule,
    SharedModule
  ],
  providers: [
    {
      provide: NgCacheRouteReuseStoreService,
      useFactory: NgCacheRouteReuseStoreService.getInstance,
    },
    {
      provide: NgCacheRouteReuseService,
      useFactory: NgCacheRouteReuseService.getInstance,
    },
    {
      provide: RouteReuseStrategy,
      useClass: NgCacheRouteReuseStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
