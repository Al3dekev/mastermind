import {ElementRef, Injectable, QueryList, ViewChildren} from '@angular/core';
import {ColorData} from '../datas/ColorData';
import { GameGridData } from '../datas/GameGridData';
import {GameSquareComponent} from '../components/game-square/game-square.component';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private _nbTurns: number;
  private _settingsMode: boolean;
  private _colorList: Array<any>;
  private _colorTab: Array<any> = [];
  private _gameGridTab: Array<any> = [];
  private _aiGridTab: Array<any>;
  @ViewChildren(GameSquareComponent, {read: ElementRef}) squareball: QueryList<ElementRef>;

  constructor() {
    this.declareColors();
    this.declareGameGrid();
  }

  declareGameGrid() {
    let y = 1;
    for (let i = 1; i <= 60; i++) {
      this.gameGridTab.push(new GameGridData(i, y, 1));
      y++;
      if (y === 7) {
        y = 1;
      }
    }
  }

  declareColors() {
    this.colorList = [
      ['rien', '#FFFFFF'], // 1
      ['rouge', '#E74C3C'], // 2
      ['violet', '#9B59B6'], // 3
      ['bleu', '#3498DB'], // 4
      ['vert', '#27AE60'], // 5
      ['jaune', '#F1C40F'], // 6
      ['orange', '#F39C12'] // 7
    ];

    this._colorList.forEach((value: any, n: number) => {
      this.colorTab.push(new ColorData(n + 1, value[0], value[1]));
    });
  }

  turnSystem() {
    // Gestion de tour
    // A chaque tour, d'abord une ligne, en commancant par en haut devient accessible pour l'utilisateur (via l'apparition dela lettre R sur chaque case
    // a chaque validation, le bouton "valider" descend d'un cran
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
