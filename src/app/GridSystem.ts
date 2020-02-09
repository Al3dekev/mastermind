import {ManagerService} from './services/manager.service';
import {ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SquareComponent} from './components/square/square.component';

export class GridSystem {

  @ViewChildren(SquareComponent, {read: ElementRef}) private _squareball: QueryList<ElementRef>;


  constructor(public ms: ManagerService) {
  }



  switchBall(gameGrid) {
    if (gameGrid.colorId === this.ms.colorTab.length) {
      gameGrid.colorId = 1;
    } else {
      gameGrid.colorId++;
    }
    this.changeBallStyle(gameGrid);
  }


  /**
   * It's actually used to show a color, depending how I want to show it.
   * @param gameGrid
   */
  changeBallStyle(gameGrid) {
    if (gameGrid.pointingStatus === true) {
      this.ms.colorTab.forEach((elem) => {
        if (gameGrid.colorId === elem.id) {
          this.squareball.forEach((ball, id) => {
            if (gameGrid.id === id + 1) {
              ball.nativeElement.valueOf().style.backgroundColor = elem.HEX;
              ball.nativeElement.valueOf().innerText = (elem.name.slice(0, 1)).toUpperCase();
              console.log('This element is now =>', elem.HEX);
            }
          });
        }
      });
    }
  }

  aiBallPlacement(gameGrid) {
    this.changeBallStyle(gameGrid);
  }


  get squareball(): QueryList<ElementRef> {
    return this._squareball;
  }

  set squareball(value: QueryList<ElementRef>) {
    this._squareball = value;
  }
}
