import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { FooterComponent } from './footer/footer.component';
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    PageBannerComponent,
    AllMoviesComponent,
    FooterComponent,
    FavouriteMoviesComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
