import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postList : TypePost[];

  constructor() { }

  ngOnInit() {
  }
}


interface TypePost{
  title : string;
  content : string;
  loveIts : number;
  created_at: Date;
}
