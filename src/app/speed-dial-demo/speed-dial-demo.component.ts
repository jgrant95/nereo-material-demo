import { Component } from "@angular/core";
import { ActionElement } from "nereo-material";

@Component({
    selector: 'app-speed-dial-demo',
    templateUrl: './speed-dial-demo.component.html',
    styleUrls: ['./speed-dial-demo.component.scss']
  })
  export class SpeedDialDemoComponent {
    fabSpeedDialActions : ActionElement[] = [
      { icon: 'insert_photo', name: 'Image', tooltip: ''},
      { icon: 'photo_camera', name: 'Photo', tooltip: ''},
      { icon: 'videocam', name: 'Video', tooltip: ''},
      { icon: 'insert_drive_file', name: 'Document', tooltip: ''}
    ];
  
    constructor() {
      
    }
  
    ngOnInit() {
    }
  
    onSelectedAction(action: ActionElement) {
      console.log('Mini FAB clicked!', action);
    }
  }