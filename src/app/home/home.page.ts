import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor: string = '0';
  valor1!: number;
  valor2!: number;
  operacao!: number;
  resultadoAnterior!: number;
  constructor() {}

  adicionarNumero(valor: string) {
    if (this.visor.length == 1 && this.visor == '0') {
      this.visor = valor;
    } else {
      this.visor += valor;
    }
  }

  adicionarPonto(valor: string) {
    if (this.visor.indexOf('.') === -1) {
      this.visor += valor;
    }
  }

  adicionarOperacao(valor: number) {
    if (this.valor1 === null) {
      this.valor1 = +this.visor;
    } else {
      this.calcular();
    }
    this.operacao = valor;
    /*this.valor1 = Number(this.visor); outra maneira de transformar string em number */
    this.visor = '0';
    //this.zerar();
  }

  porcentagem() {
    this.valor1 = +this.visor;
    this.visor = '' + this.valor1 / 100;
  }

  negativo() {
    this.valor1 = +this.visor;
    this.visor = '' + this.valor1 * -1;
  }

  calcular() {
    this.valor2 = +this.visor;
    switch (this.operacao) {
      case 0: {
        this.visor = '' + (this.valor1 + this.valor2);
        break;
      }
      case 1: {
        this.visor = '' + (this.valor1 - this.valor2);
        break;
      }

      case 2: {
        this.visor = '' + this.valor1 * this.valor2;
        break;
      }

      case 3: {
        this.visor = '' + this.valor1 / this.valor2;
        break;
      }
    }
  }

  zerar() {
    this.visor = '0';
  }
}
