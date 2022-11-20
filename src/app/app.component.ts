import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Password: string

  constructor(){
    this.Password = ''
  }

  OnButtonClick() {
    this.Password = "Your Password!"
  }

  getPassword(){
    return this.Password
  }
}
