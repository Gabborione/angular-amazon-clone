import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { DataResult } from 'src/dto/DataResult';
import { AddCategoryAction } from './store/actions/category.actions';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient, private store: Store<AppState>){}

  ngOnInit(): void {
    this.httpClient.get<DataResult>("assets/data.json").subscribe(s => {
      s.Category.forEach( c => {
        this.store.dispatch(AddCategoryAction({payload: c}));
      })
    }) 
   }
  title = 'amazon-clone';
  darkOverlay: boolean = false;

  toggleOverlay(focus: boolean){
    this.darkOverlay = focus;
  }
}
