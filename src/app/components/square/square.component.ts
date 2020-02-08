import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../services/manager.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor(private ms: ManagerService) { }

  ngOnInit() {
  }

}
