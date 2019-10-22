import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FavouriteMoviesComponent } from './favourite-movies/favourite-movies.component';
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "favourite", component: FavouriteMoviesComponent 
  },
  {
    path: "search", component:  SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
