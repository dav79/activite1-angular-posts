import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  created_date:Date;
  loveIts : number;

  constructor() {
    this.loveIts = 0;
    this.created_date = new Date();
  }
  ngOnInit() {
  }
  onLoveIts(){
    this.loveIts++;
  }

  onDontLoveIts(){
    this.loveIts--;
  }

}


