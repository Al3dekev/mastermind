import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../services/manager.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent implements OnInit {

  constructor(private ms: ManagerService) { }

  ngOnInit() {
  }

}
