import { Router } from '@angular/router';
import { QuisService } from './../services/quis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quis',
  templateUrl: './quis.component.html',
  styleUrls: ['./quis.component.scss'],
})
export class QuisComponent implements OnInit {
  seasonsOne: string[] = ['Desconhecidas', 'Alarmantes', 'Exageradas'];
  answerOne!: string;
  questionOneTryAgain = false;
  questionOnecorrect = false;

  seasonsFour: string[] = ['A gasolina', 'O álcool', 'Elétrico'];
  answerFour!: string;
  questionFourTryAgain = false;
  questionFourCorrect = false;

  seasonsFive: string[] = [
    'Investir em ciclovias seguras',
    'Baratear o custo do carro',
    'Aumentar a frota de ônibus',
  ];
  answerFive!: string;
  questionFiveTryAgain = false;
  questionFiveCorrect = false;

  seasonsSix: string[] = ['Carro', 'A pé', 'Ônibus'];
  answerSix!: string;
  questionSixTryAgain = false;
  questionSixCorrect = false;

  seasonsSeven: string[] = [
    'Usar gasolina no carro',
    'Ir a pé ou de bicicleta para lugares próximos',
    'Não oferecer carona',
  ];
  answerSeven!: string;
  questionSevenTryAgain = false;
  questionSevenCorrect = false;

  seasonsEight: string[] = [
    'As formas como as pessoas se deslocam nas vias urbanas tem influencia no meio ambiente',
    'O uso de bicicletas não é um meio sustentável para o trânsito',
    'Os carros e ônibus não são responsáveis pelo aquecimento global',
  ];
  answerEight!: string;
  questionEightTryAgain = false;
  questionEightCorrect = false;

  sendAnswerQuestionTwo = false;
  sendAnswerQuestionThree = false;

  ngOnInit() {}

  constructor(private _service: QuisService, private _router: Router) {}

  getAnswerOne(value: string) {
    if (value === 'Alarmantes') this.answerOne = 'b';
    else return;
  }

  submitQuestionOne(option: number) {
    this._service.sendOptionSelected(option).subscribe((res) => {
      if (res && res.respostaDaPergunta == this.answerOne) {
        this.questionOnecorrect = true;
        this.questionOneTryAgain = false;
      } else this.questionOneTryAgain = true;
    });
  }

  submitQuestionTwo(option: number) {
    this._service.sendOptionSelected(option).subscribe((res) => {
      if (res) this.sendAnswerQuestionTwo = true;
    });
  }

  submitQuestionThree(option: number) {
    this._service.sendOptionSelected(option).subscribe((res) => {
      if (res) this.sendAnswerQuestionThree = true;
    });
  }

  getAnswerFour(value: string) {
    if (value === 'A gasolina') this.answerFour = 'a';
    else return;
  }

  submitQuestionFour(option: number) {
    this._service.sendOptionSelected(option).subscribe((res) => {
      if (res && res.respostaDaPergunta == this.answerFour) {
        this.questionFourCorrect = true;
        this.questionFourTryAgain = false;
      } else this.questionFourTryAgain = true;
    });
  }

  getAnswerFive(value: string) {
    if (value === 'Investir em ciclovias seguras') this.answerFive = 'a';
    else return;
  }

  submitQuestionFive(option: number) {
    this._service.sendOptionSelected(option).subscribe((res) => {
      if (res && res.respostaDaPergunta == this.answerFive) {
        this.questionFiveCorrect = true;
        this.questionFiveTryAgain = false;
      } else this.questionFiveTryAgain = true;
    });
  }

  getAnswerSix(value: string) {
    if (value === 'A pé') this.answerSix = 'b';
    else return;
  }

  submitQuestionSix(option: number) {
    this._service.sendOptionSelected(option).subscribe((res) => {
      if (res && res.respostaDaPergunta == this.answerSix) {
        this.questionSixCorrect = true;
        this.questionSixTryAgain = false;
      } else this.questionSixTryAgain = true;
    });
  }

  getAnswerSeven(value: string) {
    if (value === 'Ir a pé ou de bicicleta para lugares próximos')
      this.answerSeven = 'b';
    else return;
  }

  submitQuestionSeven(option: number) {
    this._service.sendOptionSelected(option).subscribe((res) => {
      if (res && res.respostaDaPergunta == this.answerSeven) {
        this.questionSevenCorrect = true;
        this.questionSevenTryAgain = false;
      } else this.questionSevenTryAgain = true;
    });
  }

  getAnswerEight(value: string) {
    if (
      value ===
      'As formas como as pessoas se deslocam nas vias urbanas tem influencia no meio ambiente'
    )
      this.answerEight = 'a';
    else return;
  }

  submitQuestionEight(option: number) {
    this._service.sendOptionSelected(option).subscribe((res) => {
      if (res && res.respostaDaPergunta == this.answerEight) {
        this.questionEightCorrect = true;
        this.questionEightTryAgain = false;
      } else this.questionEightTryAgain = true;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/auth']);
  }
}
