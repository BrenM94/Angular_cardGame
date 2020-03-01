import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card/card.service';
import { ButtonType } from 'src/app/models/enums/button-type';
import { BrowserStack } from 'protractor/built/driverProviders';
import { CardSubmitResponse } from 'src/app/models/card-submit-response';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  public cards: Card[];
  private activeCard: Card;

  public overviewTitle = 'Overview';

  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards: Card[]) => {
      this.cards = cards;
    });
  }

  activeIndexChanged(index: number): void {
    this.activeCard = this.cards[index];
  }

  onControlButtonClicked(buttonType: ButtonType): void {
    switch (buttonType) {
      case ButtonType.ASC:
        this.cards.sort((a, b) => {
          if (a.realName < b.realName) {
              return -1;
          }
          if (b.realName < a.realName) {
              return 1;
          }
          return 0;
        });
        break;
      case ButtonType.DESC:
        this.cards.sort((a, b) => {
          if (a.realName > b.realName) {
              return -1;
          }
          if (b.realName > a.realName) {
              return 1;
          }
          return 0;
        });
        break;
      case ButtonType.SUBMIT:
        // If we have a activeCard, submit it
        if (this.activeCard) {
          this.cardService.submitCard(this.activeCard).subscribe((response: CardSubmitResponse) => {
            console.log('success:', response.success);
          });
        }
        break;
      default:
        break;
    }
  }

}
