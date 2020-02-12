import {ElementRef, Injectable, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ColorData} from '../datas/ColorData';
import { GameGridData } from '../datas/GameGridData';
import {AiGridData} from '../datas/AiGridData';
import {ResultBallData} from '../datas/ResultBallData';
import {Router} from '@angular/router';
import {GameComponent} from '../components/game/game.component';
import {SquareComponent} from '../components/square/square.component';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private _nbTurns: number;
  private _TurnLineNumber: number;
  private _settingsMode: boolean;
  private _testMod: boolean;
  private _colorList: Array<any>;
  private _colorTab: Array<any> = [];
  private _gameGridTab: Array<any> = [];
  private _aiGridTab: Array<any> = [];
  private _resultGridTab: Array<any> = [];
  @ViewChild(GameComponent, {static: false, read: ElementRef}) private _gc: ElementRef<any>;


  constructor(private router: Router) {
    this.TurnLineNumber = 0;
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
        this.passingToTheNextLineSelection();
      }
    } else if (num === 1) {
      this.router.navigate(['/']).then(r => {
          this.resetEverything();
          console.log(r);
      });
    }
  }


  passingToTheNextLineSelection() {
    const numLigne = (this.TurnLineNumber * 6) + 1;
    const resultLine = numLigne + 5;
    console.log('numLigne', numLigne);
    // Bloquage de la ligne précédente
    console.log('boucle numLigne', numLigne);
    this.gameGridTab.forEach((elem) => {
      if (elem.id >= numLigne && elem.id <= resultLine) {
        elem .pointingStatus = true;
      } else {
        elem.pointingStatus = false;
      }
      });
    this.TurnLineNumber++;
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



  turnSystem() {
/*    const turnConcernedElement = 6;
    let ligneNum = 1;
    for (let i = 1; i <= turnConcernedElement; i++) {
      this.changeSingleBallStyle(i, ligneNum);
      if (ligneNum === 6) {
        ligneNum = 1;
      } else {
        ligneNum++;
      }
    }*/

    // Gestion de tour
    // A chaque tour, d'abord une ligne, en commancant par en haut
    // devient accessible pour l'utilisateur (via l'apparition de la lettre R sur chaque case)
    // le bouton valider est sur la premiere ligne et bouge d'une ligne en bas a chaque fois
    // a chaque validation, le bouton "valider" descend d'un cran

    // ecrit le 12 02 2020
    // choix utilisateur des cases
    // ne valide pas les cases si sur BLANC/RIEN. Alert a l'utilisateur
    // Si valide, test les différentes boules avec celles de l'IA
    // dans cette ordre:
    // 1: Correspondance de couleurs, pas de placement, set une result ball sur 1
    // 2 : correspondances couleurs/placement; set une result ball sur 2
    // placer les results ball sur la ligne la plus haute et deplacer en conséquent le bouton validate
    // activation de la 2e ligne de la game grid (grace a la var TOURS EN COURS)
    // de nouveau en attente du joueur de choix boules et cliquer validate
    // Mise a jour du TOURS EN COURS a chaque fin de "turn"
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


  // LES OUTILS UTILES

  rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? ('#' +
      ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)).toUpperCase() : '';
  }

  sliceColorNameToFirstLetter(colorName: string) {
    return (colorName.slice(0, 1)).toUpperCase();
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

  get TurnLineNumber(): number {
    return this._TurnLineNumber;
  }

  set TurnLineNumber(value: number) {
    this._TurnLineNumber = value;
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

  get resultGridTab(): Array<any> {
    return this._resultGridTab;
  }

  set resultGridTab(value: Array<any>) {
    this._resultGridTab = value;
  }

  get gc(): ElementRef<any> {
    return this._gc;
  }

  set gc(value: ElementRef<any>) {
    this._gc = value;
  }

}
