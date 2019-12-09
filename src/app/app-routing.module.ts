import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageSectionsComponent } from './page-sections/page-sections.component';

const routes: Routes = [
  // { path: '', component: PageSectionsComponent },
  {
    path: 'index',
    component: PageSectionsComponent,
  },
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
  // // { path: '**', component: PageSectionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
