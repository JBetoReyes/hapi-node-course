import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {

  numbers = `
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  `;

  mapCode = `
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Same as function(number) { return number * 2 }
let doubled = numbers.map(number => number * 2);
  `;

  reduceCode = `
// Same as function(runningTotal, number) { return runningTotal + number }
var sum = numbers.reduce((runningTotal, number) => runningTotal + number, 0);
  `;

  multiStatement = `
// Here all we're really saving is the function() heading.
numbers.map(number =>
{
  if (number % 3 == 0 && number % 5 === 0)
      return "Fizz Buzz";

  if (number % 3 === 0)
      return "Fizz";

  if (number % 5 === 0)
      return "Buzz";

  return number;
});
  `;

  bind = `
let cart =
{
    items: [],
    addItem: function(anItem)
    {
        console.log("Added " + anItem + "!");
        this.items.push(anItem);
    },
    addAll: function(newItems)
    {
        // Before we'd have to do (function(anItem) { this.addItem(anItem) }).bind(this)
        newItems.forEach(anItem => this.addItem(anItem));
    }
}

cart.addAll(["pickels", "tomatoes", "cheese"])  
  `;

  constructor() { }

  ngOnInit() {
  }

}
