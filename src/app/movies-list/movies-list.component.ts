import { Component, OnInit } from '@angular/core';
import movies from '../movies.json';
import review from '../review.json';

import {Router} from '@angular/router'
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public moviesList: {title:string, img:string, releaseDate:string, description:string, rating:string, comments:object[]}[] = movies;
  public reviewList: {title:string, rating:string, comments:object[]}[] = review;
  selectedMovie : string ="";
  constructor(private _reviewService : ReviewService, private router : Router) { }

  sendMovie(data: string) {
    this.reviewList[0].title = data;
    this.router.navigate(['/view-info']);
  }
  ngOnInit(): void {
  }
}
