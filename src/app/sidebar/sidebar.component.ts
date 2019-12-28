import { Component, OnInit, HostListener } from '@angular/core';
import { AppScreenSizeService } from '../app-screen-size-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private mouseIsOver = false;

  constructor(private screenSizeService: AppScreenSizeService) { }

  ngOnInit() {
  }

  public closeSidebar(){
    this.screenSizeService.closeSidebar();
  }


}
