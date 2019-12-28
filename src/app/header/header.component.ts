import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppScreenSizeService } from '../app-screen-size-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  constructor(private screenSizeService: AppScreenSizeService) { }

  ngOnInit() {
  }



  toggleSidebar(){
    this.screenSizeService.toggleSidebar();
  }

}
