import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonType } from 'src/app/models/enums/button-type';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  @Output() buttonClicked = new EventEmitter<ButtonType>();

  public title = 'Controls';

  controlButtonClicked(buttonType: ButtonType): void {
    this.buttonClicked.emit(buttonType);
  }
}
