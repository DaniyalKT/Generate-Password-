import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Password: string
  ChangeNumbers: boolean = false
  ChangeLatter: boolean = false
  ChangeSymbols: boolean = false
  lenght: number = 0

  constructor() {
    this.Password = ''
  }

  OnButtonClick() {
    
    const Numbers = '0123456789'
    const latters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()_+/~'
    let validChar = ''
    if (this.ChangeNumbers) {
      validChar += Numbers
    }
    if (this.ChangeLatter) {
      validChar += latters
    }
    if (this.ChangeSymbols) {
      validChar += symbols
    }
    let generatedPassword = ''
    for (let index = 0; index < this.lenght; index++) {
      let index = Math.floor(Math.random() * validChar.length)
      generatedPassword += validChar[index]
    }
    this.Password += generatedPassword
  }

  onChangeNumbers() {
    this.ChangeNumbers = !this.ChangeNumbers
  }

  onChangeSymbols() {
    this.ChangeSymbols = !this.ChangeSymbols
  }

  onChangeLatter() {
    this.ChangeLatter = !this.ChangeLatter
  }

  onChangeLenght(value: any) {
    const resultValue = (value.target as HTMLInputElement).value
    const parsedValue = parseInt(resultValue)
    if (!isNaN(parsedValue)) {
      this.lenght = parsedValue
    }
  }

}
