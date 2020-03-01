import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() cards: Card[];
  @Output() selectCard = new EventEmitter<number>();

  public activeCard: Card;

  constructor() { }

  ngOnInit() {
  }

  public showDetails(index: number): void {
    this.activeCard = this.cards[index];
    this.selectCard.emit(index);
  }

}
