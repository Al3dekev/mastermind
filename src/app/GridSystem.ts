import {ManagerService} from './services/manager.service';
import {ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SquareComponent} from './components/square/square.component';

export class GridSystem {

  @ViewChildren(SquareComponent, {read: ElementRef}) private _squareball: QueryList<ElementRef>;


  constructor(public ms: ManagerService) {
  }


  rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? ('#' +
      ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)).toUpperCase() : '';
  }

  switchBall(gameGrid) {
    if (gameGrid.colorId === this.ms.colorTab.length) {
      gameGrid.colorId = 1;
    } else {
      gameGrid.colorId++;
    }
    this.changeAllBallStyle(gameGrid);
  }

  sliceColorNameToFirstLetter (colorName: string) {
    return (colorName.slice(0, 1)).toUpperCase();
  }


  /**
   * It's actually used to show a color, depending how I want to show it.
   * @param gameGrid
   */
  changeAllBallStyle(gameGrid) {
    if (gameGrid.pointingStatus === true) {
      this.ms.colorTab.forEach((elem) => {
        if (gameGrid.colorId === elem.id) {
          this.squareball.forEach((ball, id) => {
            if (gameGrid.id === id + 1) {
              ball.nativeElement.style.backgroundColor = elem.HEX;
              ball.nativeElement.innerText = this.sliceColorNameToFirstLetter(elem.name);
              console.log('This element is now =>', elem.HEX);
            }
          });
        }
      });
    }
  }

  changeSingleBallStyle(ballId: number, ballIdLine: number) {
    this.squareball.forEach((ball, id) => {
      if (id + 1 === ballId) {
        this.ms.colorTab.forEach((colorElem) => {
          if (this.rgb2hex(ball.nativeElement.style.backgroundColor) === colorElem.HEX) {
            ball.nativeElement.innerText = this.sliceColorNameToFirstLetter(colorElem.name);
          }
        });
      }
    });
  }

/*
  testColorStyle(gameGrid) {
    this.ms.colorTab.forEach((elem) => {
      if (gameGrid.colorId === elem.id) {
        this.squareball.forEach((ball, id) => {
          if (gameGrid.id === id + 1) {
            ball.nativeElement.style.backgroundColor = elem.HEX;
            console.log('is this string?');
          }
        });
      }
    });
  }*/



  turnSystem() {
    const turnConcernedElement = 6;
    let ligneNum = 1;
    for (let i = 1; i <= turnConcernedElement; i++) {
      this.changeSingleBallStyle(i, ligneNum);
      if (ligneNum === 6) {
        ligneNum = 1;
      } else {
        ligneNum++;
      }
    }

    // Gestion de tour
    // A chaque tour, d'abord une ligne, en commancant par en haut
    // devient accessible pour l'utilisateur (via l'apparition de la lettre R sur chaque case)
    // le bouton valider est sur la premiere ligne et bouge d'une ligne en bas a chaque fois
    // a chaque validation, le bouton "valider" descend d'un cran
  }




  aiBallPlacement(gameGrid) {
    this.changeAllBallStyle(gameGrid);
  }


  get squareball(): QueryList<ElementRef> {
    return this._squareball;
  }

  set squareball(value: QueryList<ElementRef>) {
    this._squareball = value;
  }
}
