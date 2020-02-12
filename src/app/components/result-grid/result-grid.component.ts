import {Component, HostBinding, OnInit} from '@angular/core';
import {ManagerService} from '../../services/manager.service';
import {GridSystem} from '../../GridSystem';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.css']
})
export class ResultGridComponent extends GridSystem implements OnInit {

  constructor(public ms: ManagerService, public sanitizer: DomSanitizer) {
    super(ms, sanitizer);
    this.Hgrid = 10 + 1; // +1 for validate button
    this.GridHeightCSS = this.sanitizer.bypassSecurityTrustStyle(`repeat(${this.Hgrid}, ${this.GridSquareSize})`);
  }

  ngOnInit() {
  }

}
