import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { CardMenu } from 'src/dto/CardMenu';
import { DataResult } from 'src/dto/DataResult';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  cards$: Observable<CardMenu[]> = this.store.select('cards');

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
