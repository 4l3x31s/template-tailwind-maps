import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        "projectId":"stuckev-6237a",
        "appId":"1:84905051409:web:806b7b6d3990862528b8b0",
        "databaseURL":"https://stuckev-6237a-default-rtdb.firebaseio.com",
        "storageBucket":"stuckev-6237a.appspot.com",
        "apiKey":"AIzaSyAgS3YRBFOrv6GD1jnVe2HEd3vyQdZdTeU",
        "authDomain":"stuckev-6237a.firebaseapp.com",
        "messagingSenderId":"84905051409",
        "measurementId":"G-G8H84ZNKRF"})),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideMessaging(() => getMessaging())
      ]
};
