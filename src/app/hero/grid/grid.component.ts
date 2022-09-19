import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardMenu } from 'src/dto/CardMenu';
import { DataResult } from 'src/dto/DataResult';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  cards: CardMenu[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<DataResult>("assets/data.json").subscribe(
      ({CardMenu}) => {     
      this.cards = CardMenu;
    })
  }

}
