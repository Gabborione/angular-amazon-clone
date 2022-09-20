import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent {

  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  constructor() { }

  closeMenu(){
    this.change(this.isOpen);
  }

  private change(state: boolean){
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }

}
