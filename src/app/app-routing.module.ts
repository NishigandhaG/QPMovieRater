import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ViewInfoComponent } from './view-info/view-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movie-list' },
  { path: 'movie-list', component: MoviesListComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'view-info', component: ViewInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
