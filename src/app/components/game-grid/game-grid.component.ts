import {Component, OnInit} from '@angular/core';
import {ManagerService} from '../../services/manager.service';
import { GridSystem } from '../../GridSystem';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent extends GridSystem implements OnInit {


  constructor(public ms: ManagerService, public sanitizer: DomSanitizer) {
    super(ms, sanitizer);
  }


  ngOnInit() {
  }

}
