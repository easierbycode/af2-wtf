import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Af2WtfAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Af2WtfAppComponent);
