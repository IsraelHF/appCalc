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
    this.operacao = valor;
    this.valor1 = +this.visor;
    /*this.valor1 = Number(this.visor);  Outra maneira de transformar string em number*/
    this.zerar();
  }

  porcentagem() {
    this.valor1 = +this.visor;
    this.visor = '' + this.valor1 / 100;
  }

  trocaSinal() {
    this.valor1 = +this.visor;
    this.visor = '' + this.valor1 * -1;
  }

  calcular() {
    if (this.valor1 !== -1 && this.operacao !== -1) {
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
      this.operacao = -1;
    }
  }

  zerar() {
    this.visor = '0';
  }
}
