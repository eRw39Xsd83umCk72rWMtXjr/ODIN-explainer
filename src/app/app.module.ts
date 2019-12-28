import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmbeddedTextLinkComponent } from './pages/embedded-text-link/embedded-text-link.component';
import { ProblemPageComponent } from './pages/problem-page/problem-page.component';
import { PurposePageComponent } from './pages/purpose-page/purpose-page.component';
import { HowItWorksPageComponent } from './pages/how-it-works-page/how-it-works-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { AccountingOfIdentitiesPageComponent } from './pages/accounting-of-identities-page/accounting-of-identities-page.component';
import { AgendaPageComponent } from './pages/agenda-page/agenda-page.component';
import { SubversionPageComponent } from './pages/subversion-page/subversion-page.component';
import { AnonymityPageComponent } from './pages/anonymity-page/anonymity-page.component';
import { LayersPageComponent } from './pages/layers-page/layers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmbeddedTextLinkComponent,
    ProblemPageComponent,
    PurposePageComponent,
    HowItWorksPageComponent,
    SidebarComponent,
    HeaderComponent,
    IndexPageComponent,
    DesignPageComponent,
    AccountingOfIdentitiesPageComponent,
    AgendaPageComponent,
    SubversionPageComponent,
    AnonymityPageComponent,
    LayersPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
