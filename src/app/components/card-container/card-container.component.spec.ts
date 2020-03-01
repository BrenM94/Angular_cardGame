import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerComponent } from './card-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardService } from 'src/app/services/card/card.service';
import { mockCard } from 'src/app/models/mocks/cards.mock';
import { of } from 'rxjs';
import { ButtonType } from 'src/app/models/enums/button-type';

describe('CardContainerComponent', () => {
  let component: CardContainerComponent;
  let fixture: ComponentFixture<CardContainerComponent>;
  let service: CardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardContainerComponent ],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CardService);
    spyOn(service, 'getCards').and.returnValue(of(mockCard));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort right', () => {
    expect(component.cards[0].realName).toBe('Brianna Forbes');
    component.onControlButtonClicked(ButtonType.DESC);
    expect(component.cards[0].realName).toBe('Hillary Gibbs');
  });
});
