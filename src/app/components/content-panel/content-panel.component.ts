import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition

} from '@angular/animations';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.css'],

  animations : [ 
      trigger(
        "toggleAnimation",
        [
          state('open', style({
            opacity : 1
          })),
          //
          state('close', style({
            opacity : 0.5
          })),
          transition('open <=> close', [
              animate('0.3s')
          ])//,
          // transition('close => open', [
          //   animate('0.5s')
          // ])
        ]
      )
  ]


})
export class ContentPanelComponent implements OnInit {

  showImage : Boolean;
  imageUrl : String;

  constructor() { 
    this.showImage = false;
    this.imageUrl = "https://steamcdn-a.akamaihd.net/steam/apps/311210/header.jpg?t=1555695256";
  }

  ngOnInit() {
  }
  
  startImage(): void {
    this.showImage = ! this.showImage;
    // if(this.showImage){
    //   this.imageUrl = "https://steamcdn-a.akamaihd.net/steam/apps/311210/header.jpg?t=1555695256";
    // } else {
    //   this.imageUrl = "https://hb.imgix.net/64992c0ed7e2d3c4312727682dfeaa4c9d7353f7.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a72c6d4118e8c15660f64a44649aef24";
    // }
  }

 
}
