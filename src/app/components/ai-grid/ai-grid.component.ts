import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../services/manager.service';
import {GridSystem} from '../../GridSystem';

@Component({
  selector: 'app-ai-grid',
  templateUrl: './ai-grid.component.html',
  styleUrls: ['./ai-grid.component.css']
})
export class AiGridComponent extends GridSystem implements OnInit {

  constructor(public ms: ManagerService) {
    super(ms);
  }


  ngOnInit() {
  }

}
