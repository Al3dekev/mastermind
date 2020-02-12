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




  switchBall(gameGrid) {
    if (gameGrid.colorId === this.ms.colorTab.length) {
      gameGrid.colorId = 1;
    } else {
      gameGrid.colorId++;
    }
    this.changeAllBallStyle(gameGrid);
  }

  /**
   * Normally used to change a single ball style with its ballId & ballIdLine
   * @param ballId
   * @param ballIdLine
   */
  changeSingleBallStyle(ballId: number, ballIdLine: number) {
    this.squareball.forEach((ball, id) => {
      if (id + 1 === ballId) {
        this.ms.colorTab.forEach((colorElem) => {
          if (this.ms.rgb2hex(ball.nativeElement.style.backgroundColor) === colorElem.HEX) {
            ball.nativeElement.innerText = this.ms.sliceColorNameToFirstLetter(colorElem.name);
          }
        });
      }
    });
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
              if (elem.name !== 'rien') {
                ball.nativeElement.innerText = this.ms.sliceColorNameToFirstLetter(elem.name);
              } else {
                ball.nativeElement.innerText = '';
              }
              console.log('This element is now =>', elem.HEX);
            }
          });
        }
      });
    } else {
      console.log('PointingStatus is false for => ', gameGrid.id);
    }
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






  aiBallPlacement(gameGrid) {
    this.changeAllBallStyle(gameGrid);
  }


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
