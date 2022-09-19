import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { DataResult } from 'src/dto/DataResult';

@Component({
  selector: 'app-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent implements OnInit {

  @Input() menuOpened: boolean = false;
  items: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<DataResult>("assets/data.json").subscribe(
      ({Category}) => {     
      this.items = Category;
    })
  }

  openMenu(){
    this.menuOpened = !this.menuOpened;
  }
}
