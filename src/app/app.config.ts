import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient()
  ]
};