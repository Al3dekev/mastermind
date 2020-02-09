import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../services/manager.service';
import {GridSystem} from '../../GridSystem';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.css']
})
export class ResultGridComponent extends GridSystem implements OnInit {

  constructor(public ms: ManagerService) {
    super(ms);
  }

  ngOnInit() {
  }

}
