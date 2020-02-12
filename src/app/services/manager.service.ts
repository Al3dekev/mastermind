import {ElementRef, Injectable, ViewChild} from '@angular/core';
import {ColorData} from '../datas/ColorData';
import { GameGridData } from '../datas/GameGridData';
import {AiGridData} from '../datas/AiGridData';
import {ResultBallData} from '../datas/ResultBallData';
import {Router} from '@angular/router';
import {GameComponent} from '../components/game/game.component';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private _nbTurns: number;
  private _settingsMode: boolean;
  private _testMod: boolean;
  private _colorList: Array<any>;
  private _colorTab: Array<any> = [];
  private _gameGridTab: Array<any> = [];
  private _aiGridTab: Array<any> = [];
  private _resultGridTab: Array<any> = [];
  @ViewChild(GameComponent, {static: false, read: ElementRef}) private _gc: ElementRef<any>;

  constructor(private router: Router) {
    this.testMod = true;
    this.checkIfTurnNbDeclared(0);
  }


  /**
   * 0: First check for entering the game
   * 1: Return to main menu when input selected
   *
   * @param num
   */
  checkIfTurnNbDeclared(num: number) {

    if (num === 0) {
      if (this.nbTurns === undefined || this.nbTurns === 0) {
        alert('Pas de tours déclarés, retour au menu principal');
        this.router.navigate(['/']).then(r =>
          console.log(r)
        );
      } else {
        this.router.navigate(['/game']).then(r =>
          console.log(r)
        );
        this.declareGameGrid();
        this.declareColors();
        this.declareAiGridSelection();
      }
    } else if (num === 1) {
      this.router.navigate(['/']).then(r => {
          this.resetEverything();
          console.log(r);
      });
    }
  }

  resetEverything() {
    this.aiGridTab = [];
    this.colorTab = [];
    this.gameGridTab = [];
    this.colorList = [];
    if (this._gc !== undefined) {
      if (this._gc.nativeElement.valueOf().innerHTML !== '') {
        this._gc.nativeElement.valueOf().innerHTML = '';
      }
    }
  }

  declareGameGrid() {
    console.log('TOURS =>', this.nbTurns);
    let y = 1;
    for (let i = 1; i <= (this.nbTurns * 6); i++) {
      this.gameGridTab.push(new GameGridData(i, y, 1, false));
      y++;
      if (y === 7) {
        y = 1;
      }
    }
  }

  declareColors() {
    this.colorList = [
      ['rien', '#FFFFFF'], // 1 - it isn't a color
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


  declareAiGridSelection() {
    let num = 1;
    for (const elem of this.shuffle(this.colorTab)) {
      if (elem.id !== 1) {
        this.aiGridTab.push(new AiGridData(num, num, elem.id, false));
        num++;
      }
    }
    if (this.testMod) {
      this.aiGridTab.forEach((el) => {
        el.pointingStatus = true;
      });
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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

  get testMod(): boolean {
    return this._testMod;
  }

  set testMod(value: boolean) {
    this._testMod = value;
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

  get gc(): ElementRef<any> {
    return this._gc;
  }

  set gc(value: ElementRef<any>) {
    this._gc = value;
  }

  get resultGridTab(): Array<any> {
    return this._resultGridTab;
  }

  set resultGridTab(value: Array<any>) {
    this._resultGridTab = value;
  }
}
