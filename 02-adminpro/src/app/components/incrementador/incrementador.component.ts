import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrl: './incrementador.component.css'
})
export class IncrementadorComponent {

  //@Input() progress: number = 50;
  @Input('value') progress: number = 50;
  @Output() outPutValue: EventEmitter<number> = new EventEmitter();

  
  changeValue(value: number){
   if (this.progress >= 100 && value >= 0) {
      this.outPutValue.emit(100);
      this.progress = 100;
      return; 
   }

   if (this.progress <= 0 && value <= 0) {
      this.outPutValue.emit(0);
      this.progress = 0;
      return; 
    }

    this.progress += value;
    this.outPutValue.emit(this.progress);
  }
}
