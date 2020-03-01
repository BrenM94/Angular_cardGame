import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input() card: Card;

  public title = 'Details';

}
