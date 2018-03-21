import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActionBarComponent } from './containers/action-bar/action-bar.component';
import { InitativeTrackerComponent } from './containers/initative-tracker/initative-tracker.component';
import { CharacterInitativeComponent } from './components/character-initative/character-initative.component';
import { DeckComponent } from './containers/deck/deck.component';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';
import { HealthTrackerComponent } from "./containers/health-tracker/health-tracker.component";
import { CharacterHealthComponent } from "./components/character-health/character-health.component";

import { NameFilterPipe } from './pipes/name-filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

import { LineParserService } from './services/line-parser.service';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    InitativeTrackerComponent,
    CharacterInitativeComponent,
    DeckComponent,
    MonsterCardComponent,
    ActionButtonComponent,
    SearchDropdownComponent,
    HealthTrackerComponent,
    CharacterHealthComponent,
    NameFilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LineParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
