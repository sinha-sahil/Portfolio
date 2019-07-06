import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition

} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger( "optionSelectAnimation",
      [ state('select', style({
        paddingLeft : "25%"
      }))
      , state("disselect", style({
        paddingLeft : "25%"
      }))
      ,
      transition('select <=> disselect', [
        animate('0.3s')
      ])
      ]
    )
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
