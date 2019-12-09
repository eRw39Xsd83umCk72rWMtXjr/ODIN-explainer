import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-embedded-text-link',
  templateUrl: './embedded-text-link.component.html',
  styleUrls: ['./embedded-text-link.component.css']
})
export class EmbeddedTextLinkComponent implements OnInit {


  @Input() public text: string = "";

  constructor() { }

  ngOnInit() {
  }

}
