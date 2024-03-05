import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
num1: number = 0;
num2: number = 0;
resp: number = 0;

onclicksum(){
  this.resp = this.num1 + this.num2;
  
}
onclicksub(){
  this.resp = this.num1 - this.num2;
}

onclickdiv(){
  this.resp = this.num1 / this.num2;
}

onclickmult(){
  this.resp = this.num1 * this.num2;
}


}
