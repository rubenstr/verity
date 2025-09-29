import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routers';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideEnvironmentNgxMask } from 'ngx-mask';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent,{
//     providers: [importProvidersFrom(BrowserModule), provideEnvironmentNgxMask(), provideRouter(routes)],
// })
 // .catch(err => console.error(err));
