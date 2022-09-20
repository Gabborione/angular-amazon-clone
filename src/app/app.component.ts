import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amazon-clone';
  darkOverlay: boolean = false;

  toggleOverlay(focus: boolean){
    this.darkOverlay = focus;
  }
}
