import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  accountOpened: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  async toggleMenu(){
    if(this.accountOpened){
      await new Promise(f => {setTimeout(f, 1000);
      });
    }
    
    this.accountOpened = !this.accountOpened
    
    
  }

}
