import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageSectionsComponent } from './page-sections/page-sections.component';
import { EmbeddedTextLinkComponent } from './page-sections/embedded-text-link/embedded-text-link.component';
import { ProblemComponent } from './page-sections/problem/problem.component';
import { PurposeComponent } from './page-sections/purpose/purpose.component';
import { HowItWorksComponent } from './page-sections/how-it-works/how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    PageSectionsComponent,
    EmbeddedTextLinkComponent,
    ProblemComponent,
    PurposeComponent,
    HowItWorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
