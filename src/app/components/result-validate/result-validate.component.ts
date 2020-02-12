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
    console.log('Vide mais fonctionne. Bouton Validate');
    let y = 1;
    if (this.actualRow <= 11) {
      this.actualRow++;
      this.gridArea = this.actualRow;
      for (let i = 1; i <= 6; i++) {
        console.log('Loop', y);
        this.ms.resultGridTab.push(new ResultBallData(i, y, 0));
        y++;
      }
    }
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
