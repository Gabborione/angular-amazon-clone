import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatIconModule } from "@angular/material/icon";
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component'



@NgModule({
  declarations: [
    TopHeaderComponent,
    SearchbarComponent,
    BottomHeaderComponent,
    HamburgerMenuComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TopHeaderComponent,
    BottomHeaderComponent
  ]
})
export class HeaderModule { }
