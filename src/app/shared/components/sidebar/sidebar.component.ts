import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  categories = ['Kategoraia 1','Kategoraia 2','Kategoraia 3','Kategoraia 4','Kategoraia 5','Kategoraia 6','Kategoraia 7',]
  constructor() { }

  ngOnInit(): void {
  }

}
