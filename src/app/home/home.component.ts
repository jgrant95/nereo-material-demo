import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openBackdropCode(): void {
    window.location.href = "https://github.com/nereolopez/nereo-material-demo/tree/master/src/app/backdrop-demo";
  }
}
