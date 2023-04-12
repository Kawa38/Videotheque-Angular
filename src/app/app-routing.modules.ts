import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pereComponent } from './pere/pere.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ComponentFixture } from '@angular/core/testing';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';

const routes: Routes = [
  { path: 'videotheque', component: pereComponent },
  { path: '', component: HomepageComponent },

  // gestion des pages nons trouvé
  { path:'**',
  component: PageNonTrouveComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
