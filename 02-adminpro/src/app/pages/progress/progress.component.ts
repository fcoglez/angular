import { Component } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress: number = 50;

  get getPercentage(){
    return `${ this.progress }%`;
  }

  changeValue(value: number){

    this.progress += value;

  }
}
