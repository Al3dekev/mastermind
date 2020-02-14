import {ManagerService} from './services/manager.service';
import {ElementRef, HostBinding, QueryList, ViewChildren} from '@angular/core';
import {SquareComponent} from './components/square/square.component';
import {DomSanitizer} from '@angular/platform-browser';

export class GridSystem {

  @HostBinding('style.grid-template-rows') private _GridHeightCSS;
  private _Hgrid: number;
  private _Wgrid: number;
  private _GridSquareSize: string;
  @ViewChildren(SquareComponent, {read: ElementRef}) private _squareball: QueryList<ElementRef>;


  constructor(public ms: ManagerService, public sanitizer: DomSanitizer) {
    // Will never changes as far as I know
    this.GridSquareSize = '50px';
  }


  /**
   * Actually used for ball placements in the Ai Grid.
   * @param gameGrid
   */
  aiBallPlacement(gameGrid) {
    this.changeBallStyle(gameGrid);
  }

  /**
   * Used to change ball color on the user Game Grid
   * @param gameGrid
   */
  switchBall(gameGrid) {

    this.ms.gameGridTab.forEach( (ggElem) => {
      if (gameGrid.id === ggElem.id) {
        if (ggElem.colorId === this.ms.colorTab.length) {
          ggElem.colorId = 1;
        } else {
          ggElem.colorId++;
        }
      }
    });
    this.changeBallStyle(gameGrid);
  } // END switchBall


  /**
   * Used to change color
   * @param gameGrid
   */
  changeBallStyle(gameGrid) {
    this.squareball.forEach( (ball, idBall) => {
      if (gameGrid.id === (idBall + 1) && gameGrid.pointingStatus === true) {
        this.ms.colorTab.forEach((colorElem) => {
          if (gameGrid.colorId === colorElem.id) {
            ball.nativeElement.style.backgroundColor = colorElem.HEX;
            console.log('This element N°' + gameGrid.id + ' is now =>', colorElem.HEX, gameGrid.colorId);
            if (gameGrid.colorId === 1) {
              ball.nativeElement.innerText = '';
            } else {
              ball.nativeElement.innerText = this.ms.sliceColorNameToFirstLetter(colorElem.name);
            }
          }
        });
      } else if (gameGrid.id === (idBall + 1) && gameGrid.pointingStatus === false) {
        console.log('PointingStatus is false for => ', gameGrid.id);
      }
    });

  } // END changeSingleBall



  get GridHeightCSS() {
    return this._GridHeightCSS;
  }

  set GridHeightCSS(value) {
    this._GridHeightCSS = value;
  }

  get Hgrid(): number {
    return this._Hgrid;
  }

  set Hgrid(value: number) {
    this._Hgrid = value;
  }

  get Wgrid(): number {
    return this._Wgrid;
  }

  set Wgrid(value: number) {
    this._Wgrid = value;
  }

  get GridSquareSize(): string {
    return this._GridSquareSize;
  }

  set GridSquareSize(value: string) {
    this._GridSquareSize = value;
  }

  get squareball(): QueryList<ElementRef> {
    return this._squareball;
  }

  set squareball(value: QueryList<ElementRef>) {
    this._squareball = value;
  }
}
