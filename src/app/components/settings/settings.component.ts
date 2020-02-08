import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ManagerService} from '../../services/manager.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @ViewChild('inputTurn', {static: false}) inputTurn: ElementRef;

  constructor(private ms: ManagerService) { }

  accessGame() {
    let turn = this.inputTurn.nativeElement.valueOf().value;
    if (this.ms.testMod) {
      this.inputTurn.nativeElement.valueOf().value = 10;
      turn = this.inputTurn.nativeElement.valueOf().value;
    }
    if (turn === '' || turn === undefined || turn === 0 || turn > 10) {
      alert('Please insert a valid turn number');
    } else {
      this.ms.nbTurns = turn;
      this.ms.checkIfTurnNbDeclared(0);
    }
  }

  editTurn() {
    this.ms.checkIfTurnNbDeclared(1);
  }

  ngOnInit() {
  }

}
