import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { DataResult } from 'src/dto/DataResult';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss']
})
export class BottomHeaderComponent implements OnInit {

  @Input() menuOpened: boolean = false;
  items$: Observable<Array<String>> = this.store.select('categories');

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

  openMenu(){
    this.menuOpened = !this.menuOpened;
  }
}
