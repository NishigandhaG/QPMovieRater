import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import {Router} from '@angular/router'
import movies from '../movies.json';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  public moviesList: any = movies;

  addMovie = new FormGroup({
    title: new FormControl(''),
    img: new FormControl(''),
    releaseDate: new FormControl(''),
    description: new FormControl(''),
    rating: new FormControl(''),
    comments: new FormControl('')
  }); 

  constructor(private fb: FormBuilder, private router:Router) {
    this.createForm();
  }

  createForm() {
    this.addMovie = this.fb.group({
       title: ['', Validators.required ],
       img: [''],
       releaseDate: ['', Validators.required], 
       description: ['', Validators.required],
       rating: [''],
       comments: ['']
    });
  }

  onClick (data: MoviesListComponent){
    this.moviesList.push(data);
    this.router.navigate(['/movie-list']);
  }
  ngOnInit(): void {
  }

}
