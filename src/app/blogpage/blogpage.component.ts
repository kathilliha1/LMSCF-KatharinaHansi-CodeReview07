import { Component, OnInit } from '@angular/core';
import { bloginfo } from '../bloginfo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {
  bloginfo = bloginfo;
  newBlogPost = new FormGroup ({
    img: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
