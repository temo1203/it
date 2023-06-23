import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { prevTopics } from './previus-topics';
import { CompComponent } from './comp/comp.component';
import { BebiaComponent } from './bebia/bebia.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    prevTopics,
    CompComponent,
    BebiaComponent,
    HeaderComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
