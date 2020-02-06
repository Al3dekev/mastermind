import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @ViewChild('inputTurns', {static: false}) inputTurn: ElementRef;
  private testMod = true;

  constructor(private router: Router) { }

  accessGame() {
    if (this.testMod) {
      this.inputTurn.nativeElement.valueOf().value = '10';
    }
    if (this.inputTurn.nativeElement.valueOf().value === '') {
      alert('Please insert a turn number');
    } else {
      this.router.navigate(['/game']).then(r =>
        console.log(r)
      );
    }
  }

  ngOnInit() {
  }

}
