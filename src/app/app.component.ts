import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-unit-testing';

  name = 'curious george';
  phNumber = '3333333333';

  persons = [
    {firstName: 'first0', lastName: 'last0'},
    {firstName: 'first1', lastName: 'last2'},
    {firstName: 'first2', lastName: 'last3'},
    {firstName: 'first3', lastName: 'last4'}
  ]

  add() {
    const len = this.persons.length;
    this.persons.push({firstName: 'first' + len, lastName: 'last' + len});
  }

}
