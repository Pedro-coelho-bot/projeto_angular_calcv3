import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
num1: number = 0;
num2: number = 0;
sum: number = 0;
mult: number = 0;
sub: number = 0;
div: number = 0;
onclicksum(){
  this.sum = this.num1 + this.num2;
  this.mult = this.num1 * this.num2;
  this.div = this.num1 / this.num2;
  this.sub = this.num1 - this.num2;
}
onclicksub(){
  this.sub = this.num1 - this.num2;
}

onclickdiv(){
  this.div = this.num1 / this.num2;
}

onclickmult(){
  this.mult = this.num1 * this.num2;
}


}
