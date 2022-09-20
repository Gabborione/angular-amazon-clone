import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  accountOpened: boolean= false;
  @Output() darkOverlayChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  async toggleMenu(){
    if(this.accountOpened){
      await new Promise(f => {setTimeout(f, 1000);
      });
      this.accountOpened = false
    }
    else{
      this.accountOpened = true;
    }
  }

  toggleOverlay(focus: boolean){
    console.log(focus);
    this.change(focus);
  }

  private change(focus: boolean){
    this.darkOverlayChange.emit(focus);
  }

}
