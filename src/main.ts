import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from '@aws-amplify/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Amplify.configure(environment.amplify);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
