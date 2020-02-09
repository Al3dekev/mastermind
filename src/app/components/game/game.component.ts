import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../services/manager.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private ms: ManagerService) {

  }

  ngOnInit() {
  }

}
