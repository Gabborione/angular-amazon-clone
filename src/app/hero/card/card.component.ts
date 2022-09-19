import { Component, Input, OnInit } from '@angular/core';
import { CardMenu } from 'src/dto/CardMenu';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardMenu | undefined;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
