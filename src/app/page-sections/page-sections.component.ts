import { Component, OnInit } from '@angular/core';
import { PageSection } from './page-section.class';

@Component({
  selector: 'app-page-sections',
  templateUrl: './page-sections.component.html',
  styleUrls: ['./page-sections.component.css']
})
export class PageSectionsComponent implements OnInit {


  public selectedItem: string;

  constructor() { }

  ngOnInit() {
    this.selectedItem = 'Purpose';
  }



}
