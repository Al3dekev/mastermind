import {Component, Host, HostBinding, OnInit} from '@angular/core';
import {ManagerService} from '../../services/manager.service';
import {ResultBallData} from '../../datas/ResultBallData';

@Component({
  selector: 'app-result-validate',
  templateUrl: './result-validate.component.html',
  styleUrls: ['./result-validate.component.css']
})
export class ResultValidateComponent implements OnInit {

  @HostBinding('style.grid-row-start') private _gridArea: number;
  private _actualRow: number;

  constructor(private ms: ManagerService) {
    this.actualRow = 1;
    this.gridArea = this.actualRow;
  }

  EmptyForNow() {
    this.BallComparisons();
    this.ms.passingToTheNextLineSelection();
  }

  ResultBallsCreation() {
    let y = 1;
    if (this.actualRow <= 10) {
      this.actualRow++;
      this.gridArea = this.actualRow;
      for (let i = 1; i <= 6; i++) {
        this.ms.resultGridTab.push(new ResultBallData(i, y, 0));
        y++;
      }
    } else {
      console.log('Vous avez gagné');
    }
  }

  BallComparisons() {
    const numLigne = (this.ms.TurnLineNumber * 6) + 1;
    const resultLigne = numLigne + 5;
    let num = 0;
    let found = false;

    this.ms.aiGridTab.forEach((AiGrid) => {
      this.ms.gameGridTab.forEach((GameGrid, idg) => {
        if (numLigne <= GameGrid.id && resultLigne >= GameGrid.id && found === false && this.ms.resultGridTab.length < resultLigne) {

          if ((AiGrid.id_line === GameGrid.id_line) && (AiGrid.colorId === GameGrid.colorId)) {
            console.log('Meme couleur et meme position, GG');
            this.ms.resultGridTab.push(new ResultBallData(AiGrid.id, idg, 2));
            found = true;
          } else if ((AiGrid.id_line !== GameGrid.id_line) && (AiGrid.colorId === GameGrid.colorId)) {
            console.log('meme couleur, pas meme position');
            this.ms.resultGridTab.push(new ResultBallData(AiGrid.id, idg, 1));
            found = true;
          } else if ((AiGrid.colorId !== GameGrid.colorId)) {
            console.log('Rien de similaire', AiGrid.colorId, GameGrid.colorId);
            this.ms.resultGridTab.push(new ResultBallData(AiGrid.id, idg, 0));
          }
          num++;
        }
      });
      found = false;
    });
    this.actualRow++;
    this.gridArea = this.actualRow;
    console.log('Elements récupérés => ', num);




  }


/*  declareResultGrid() {
    let y = 1;
    for (let i = 1; i <= (this.nbTurns * 6); i++) {
      this.resultGridTab.push(new ResultBallData(i, y, 0));
      y++;
      if (y === 7) {
        y = 1;
      }
    }
  }*/

/*  changeResultGrid() {

  }*/


  get gridArea(): number {
    return this._gridArea;
  }

  set gridArea(value: number) {
    this._gridArea = value;
  }


  get actualRow(): number {
    return this._actualRow;
  }

  set actualRow(value: number) {
    this._actualRow = value;
  }

  ngOnInit() {
  }

}
