import { Injectable } from '@angular/core';
import {ColorData} from '../datas/ColorData';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private _nbTurns: number;
  private _settingsMode: boolean;
  private _colorList: Array<any>;
  private _colorTab: Array<any>;
  private _gameGridTab: Array<any>;
  private _aiGridTab: Array<any>;

  constructor() {
    this.declareColors();
    this.declareGameGrid();
  }

declareGameGrid() {
    let y = 1;
    for (let i = 1; i <= 60; i++) {
      this.gameGridTab.push(new GameGridData(i, y, 1));
      y++;
      if ( y === 7 ) {
        y = 1;
      }
    }
}


  declareColors() {
    this.colorList = [
      ['rien',   '#FFFFFF'], // 1
      ['rouge',  '#E74C3C'], // 2
      ['violet', '#9B59B6'], // 3
      ['bleu',   '#3498DB'], // 4
      ['vert',   '#27AE60'], // 5
      ['jaune',  '#F1C40F'], // 6
      ['orange', '#F39C12'] // 7
    ];
    this.colorList.forEach(function(value, n) {
      this.colorTab.push(new ColorData(n + 1, value[0], value[1]));
    });

  }


  get nbTurns(): number {
    return this._nbTurns;
  }

  set nbTurns(value: number) {
    this._nbTurns = value;
  }

  get settingsMode(): boolean {
    return this._settingsMode;
  }

  set settingsMode(value: boolean) {
    this._settingsMode = value;
  }

  get colorList(): Array<any> {
    return this._colorList;
  }

  set colorList(value: Array<any>) {
    this._colorList = value;
  }

  get colorTab(): Array<any> {
    return this._colorTab;
  }

  set colorTab(value: Array<any>) {
    this._colorTab = value;
  }

  get gameGridTab(): Array<any> {
    return this._gameGridTab;
  }

  set gameGridTab(value: Array<any>) {
    this._gameGridTab = value;
  }

  get aiGridTab(): Array<any> {
    return this._aiGridTab;
  }

  set aiGridTab(value: Array<any>) {
    this._aiGridTab = value;
  }
}
