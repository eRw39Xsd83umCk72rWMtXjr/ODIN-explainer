import { Component, HostListener, OnInit } from '@angular/core';
import { AppScreenSizeService } from './app-screen-size-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private screenSizeService: AppScreenSizeService) { }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenSizeService.resize(window.innerWidth);
  }

  ngOnInit(){
    this.screenSizeService.resize(window.innerWidth);
  }
  
  public get showSidebar(): boolean { return this.screenSizeService.sidebarOpen; }
}
