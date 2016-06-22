import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Af2WtfAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(Af2WtfAppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase("https://af2-wtf.firebaseio.com")
]);
