import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ManagerService} from '../../services/manager.service';
import {GameSquareComponent} from '../game-square/game-square.component';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit {

  @ViewChildren(GameSquareComponent, {read: ElementRef}) squareball: QueryList<ElementRef>;

  constructor(private ms: ManagerService) {}

  switchBall(gameGrid) {
    if (gameGrid.colorId === 6) {
      gameGrid.colorId = 1;
    } else {
      gameGrid.colorId++;
    }
    this.ms.colorTab.forEach((elem) => {
      if (gameGrid.colorId === elem.id) {
        this.squareball.forEach((ball, id) => {
          if (gameGrid.id === id + 1) {
            ball.nativeElement.valueOf().style.backgroundColor = elem.HEX;
            ball.nativeElement.valueOf().innerText = (elem.name.slice(0, 1)).toUpperCase();
            // console.log('This element is now =>', elem.HEX);
          }
        });
      }
    });
  }


  ngOnInit() {
  }

}
