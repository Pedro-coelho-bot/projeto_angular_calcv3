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
historico: string[] = [];

onclicksum(){
  this.resp = this.num1 + this.num2;
  this.addToHistory('+');

}
onclicksub(){
  this.resp = this.num1 - this.num2;
  this.addToHistory('-');
}

onclickdiv(){
  if (this.num2 !== 0) {
    this.resp = this.num1 / this.num2;
    this.addToHistory('/');
  } else {
    this.resp = NaN; // Indica divisão por zero
    this.addToHistory('/ (divisão por zero)');
  }
}

onclickmult(){
  this.resp = this.num1 * this.num2;
  this.addToHistory('*');
}

onclickresp(){
  this.resp = 0;
  this.historico = [];
}

private addToHistory(operator: string) {
  this.historico.push(`${this.num1} ${operator} ${this.num2} = ${this.resp}`);
}


}
