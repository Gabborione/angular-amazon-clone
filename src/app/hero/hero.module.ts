import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';



@NgModule({
  declarations: [
    GridComponent,
    CardComponent,
    HeroCarouselComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GridComponent,
    HeroCarouselComponent
  ]
})
export class HeroModule { }
