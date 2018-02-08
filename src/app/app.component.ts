import { Component } from '@angular/core';

import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  value1: number;
  value2: number;
  result: number = 0;
  history: string[] = [];

  calculate (operator : string) {
    if (operator == "+") {this.result = +this.value1 + +this.value2;}
    else if (operator == "-") {this.result = this.value1 - this.value2;}
    else if (operator == "x") {this.result = this.value1 * this.value2;}
    else if (operator == "/") {this.result = this.value1 / this.value2;}
    else if (operator == "^") {this.result = Math.pow (this.value1 , this.value2);}
    else if (operator == "v") {this.result = Math.pow (this.value1 , 1 / this.value2);}
    else if (operator == "%") {this.result = this.value1 % this.value2;} 

    this.history.push(this.value1 +operator+ this.value2 +" = "+ this.result);
  }
    
}

