import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { DetailsComponent } from './components/details/details.component';
import { ControlsComponent } from './components/controls/controls.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CardService } from './services/card/card.service';

import { HttpClientModule } from '@angular/common/http';
import { PlayGameComponent } from './play-game/play-game.component';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    DetailsComponent,
    ControlsComponent,
    OverviewComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
