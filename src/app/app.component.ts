import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigateToGithub(): void{
   window.location.href = 'https://github.com/nereolopez/nereo-material-demo';
  }
}

