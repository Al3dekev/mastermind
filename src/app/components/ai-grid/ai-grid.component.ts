import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../../services/manager.service';
import {GridSystem} from '../../GridSystem';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-ai-grid',
  templateUrl: './ai-grid.component.html',
  styleUrls: ['./ai-grid.component.css']
})
export class AiGridComponent extends GridSystem implements OnInit {

  constructor(public ms: ManagerService, public sanitizer: DomSanitizer) {
    super(ms, sanitizer);
  }


  ngOnInit() {
  }

}
