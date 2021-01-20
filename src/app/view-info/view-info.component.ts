import { Component, OnInit } from '@angular/core';
import movies from '../movies.json';
import review from '../review.json';
import { ReviewService } from '../review.service';
import {FormControl, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.css']
})
export class ViewInfoComponent implements OnInit {

  isShow = false;

  addComment = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl('')
  }); 

  ctrl = new FormControl(null, Validators.required);
  movieSelected: string = "";
  public moviesList: { title: string, img: string, releaseDate: string, description: string, rating: string, comments: object[] }[] = movies;
  public reviewList: {title:string, rating:string, comments:object[]}[] = review;
  constructor(private _reviewService: ReviewService, private fb: FormBuilder) {
    this.createForm();
   }

   
   createForm() {
    this.addComment = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  displayComments() {
    this.isShow = true;
  }

  countChar(val: any) {
    var len = val.value.length;
    if (len >= 150) {
      val.value = val.value.substring(0, 150);
    } else {
      $('#rchars').text(150 - len);
    }
  };

  ngOnInit(): void {
    
  }
  
}
