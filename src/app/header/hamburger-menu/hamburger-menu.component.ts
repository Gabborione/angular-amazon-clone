import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {

 @Input() isOpen: boolean = false;

 @Output() isOpenChange = new EventEmitter<boolean>();

  constructor() { }

  closeMenu(){
    this.change(this.isOpen);
  }

  private change(currentOpen: boolean){
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

}
