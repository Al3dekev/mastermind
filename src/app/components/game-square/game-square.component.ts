import {Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import {ManagerService} from '../../services/manager.service';

@Component({
  selector: 'app-game-square',
  templateUrl: './game-square.component.html',
  styleUrls: ['./game-square.component.css']
})
export class GameSquareComponent implements OnInit {

  constructor(private ms: ManagerService) {}

  ngOnInit() {
  }

}
