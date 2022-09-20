import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatIconModule } from "@angular/material/icon";
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { LoginMenuComponent } from './login-menu/login-menu.component'



@NgModule({
  declarations: [
    TopHeaderComponent,
    SearchbarComponent,
    BottomHeaderComponent,
    HamburgerMenuComponent,
    LoginMenuComponent
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
