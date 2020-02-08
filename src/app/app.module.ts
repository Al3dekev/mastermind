import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/AppComponent/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './components/game/game.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { AiGridComponent } from './components/ai-grid/ai-grid.component';
import {MatButtonModule, MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { ResultGridComponent } from './components/result-grid/result-grid.component';
import { ResultBallComponent } from './components/result-ball/result-ball.component';
import { ResultValidateComponent } from './components/result-validate/result-validate.component';
import { SquareComponent } from './components/square/square.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    GameComponent,
    GameGridComponent,
    AiGridComponent,
    ResultGridComponent,
    ResultBallComponent,
    ResultValidateComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
