import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-demo',
  templateUrl: './banner-demo.component.html',
  styleUrls: ['./banner-demo.component.scss']
})
export class BannerDemoComponent implements OnInit {

  showBanner:boolean = false;
  actionResult: string;

  constructor() { }

  ngOnInit() {
  }

  onShowBanner(){
    this.showBanner = true;
  }

  hideBanner(){
    this.showBanner = false;
  }

  mainActionClicked(){
    this.actionResult = 'main';
    this.hideBanner();
  }

  secondaryActionClicked(){
    this.actionResult = 'secondary';
    this.hideBanner();
  }
}
