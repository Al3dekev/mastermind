import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../services/manager.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private ms: ManagerService, private router: Router) {

  }

  ngOnInit() {
  }

}
