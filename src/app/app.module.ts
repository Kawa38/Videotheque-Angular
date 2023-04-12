import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';
import { pereComponent } from './pere/pere.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.modules';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { PageNonTrouveComponent } from './page-non-trouve/page-non-trouve.component';

@NgModule({
  declarations: [
    AppComponent,
    // Avant de le déclarer obligatoirement comme module
    ListeFilmsComponent,
    pereComponent,
    HeaderComponent,
    HomepageComponent,
    NavComponent,
    PageNonTrouveComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
