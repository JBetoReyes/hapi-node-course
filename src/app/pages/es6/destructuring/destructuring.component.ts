import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructuring',
  templateUrl: './destructuring.component.html',
  styleUrls: ['./destructuring.component.scss']
})
export class DestructuringComponent implements OnInit {

  array = `
// We don't care about the second item, so just leave it out
var [first, , third] = [1, 2, 3];

console.log(first + " and " + third);
  `;

  obj = `
let person = { name: "Tom", age: 30, city: "San Francisco" };
let { name, city } = person;

console.log(name + " lives in " + city);  
  `;

  person = `
let person = { name: "Tom", age: 30, city: "San Francisco" };
  `;

  parameters = `
function isOldEnoughToVote({ age })
{
    return age >= 18;
}

if (isOldEnoughToVote(person))
    console.log(person.name + " is old enough to vote");
else
    console.log(person.name + " is not old enough to vote");  
  `;

  constructor() { }

  ngOnInit() {
  }

}
