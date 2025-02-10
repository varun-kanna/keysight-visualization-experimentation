import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';  // Import this

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()]  // Provide animations globally
}).catch(err => console.error(err));

