import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppScreenSizeService {

  private sizeDelineator: number = 600;

  constructor() { }

  private _sidebarOpen$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public get sidebarOpen(): boolean { return this._sidebarOpen$.getValue(); }
  public get sidebarOpen$(): Observable<boolean> { return this._sidebarOpen$.asObservable(); }

  public toggleSidebar() {
    const currentValue = this.sidebarOpen;
    this._sidebarOpen$.next(!currentValue);
  }

  public closeSidebar(){
    if(this.screenWidth < this.sizeDelineator){
      this._sidebarOpen$.next(false);
    }
  }

  private screenWidth: number;
  public resize(width: number){
    this.screenWidth = width;
    if(this.screenWidth >= this.sizeDelineator){
      this._sidebarOpen$.next(true);
    }else{
      this._sidebarOpen$.next(false);
    }
  }

}
