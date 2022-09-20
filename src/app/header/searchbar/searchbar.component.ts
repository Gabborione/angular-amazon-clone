import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  labelFocus: boolean = false;
  totalFocus: boolean = false;
  @Output() totalFocusChange = new EventEmitter<boolean>();

  toggleFocus(){
    this.change(this.totalFocus);
  }

  private change(totalFocus: boolean){
    this.totalFocus = !totalFocus;
    this.totalFocusChange.emit(this.totalFocus);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
