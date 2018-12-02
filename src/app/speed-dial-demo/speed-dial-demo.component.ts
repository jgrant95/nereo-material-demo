import { Component } from "@angular/core";
import { ActionElement } from "nereo-material";

@Component({
    selector: 'app-speed-dial-demo',
    templateUrl: './speed-dial-demo.component.html',
    styleUrls: ['./speed-dial-demo.component.scss']
  })
  export class SpeedDialDemoComponent {
    fabSpeedDialActions : ActionElement[] = [
      { icon: 'insert_photo', name: 'Image'},
      { icon: 'photo_camera', name: 'Photo'},
      { icon: 'videocam', name: 'Video'},
      { icon: 'insert_drive_file', name: 'Document'}
    ];
  
    constructor() {
      
    }
  
    ngOnInit() {
    }
  
    onSelectedAction(action: ActionElement) {
      console.log('Mini FAB clicked!', action);
    }
  }