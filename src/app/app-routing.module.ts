import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ProblemPageComponent } from './pages/problem-page/problem-page.component';
import { HowItWorksPageComponent } from './pages/how-it-works-page/how-it-works-page.component';
import { PurposePageComponent } from './pages/purpose-page/purpose-page.component';
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { AccountingOfIdentitiesPageComponent } from './pages/accounting-of-identities-page/accounting-of-identities-page.component';
import { AgendaPageComponent } from './pages/agenda-page/agenda-page.component';
import { AnonymityPageComponent } from './pages/anonymity-page/anonymity-page.component';
import { SubversionPageComponent } from './pages/subversion-page/subversion-page.component';
import { LayersPageComponent } from './pages/layers-page/layers-page.component';

const routes: Routes = [
  { path: 'index', component: IndexPageComponent, },
  { path: 'problem', component: ProblemPageComponent },
  { path: 'purpose', component: PurposePageComponent },
  { path: 'how-it-works', component: HowItWorksPageComponent },
  { path: 'design', component: DesignPageComponent },
  { path: 'accounting-of-identities', component: AccountingOfIdentitiesPageComponent },
  { path: 'agenda', component: AgendaPageComponent },
  { path: 'subversion', component: SubversionPageComponent },
  { path: 'layers', component: LayersPageComponent },
  { path: 'anonymity', component: AnonymityPageComponent },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

