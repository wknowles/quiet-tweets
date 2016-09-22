import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { component } from '@angular/core';
// @component ({
//   selector: 'my-app'
//   template: '<h1>Ultra racing</h1>'
// })
// class AppComponent { }

// bootstrap (AppComponent)
