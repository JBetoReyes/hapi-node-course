import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  shapeClass = `
class Shape {
  
  constructor(sides) {
    console.log('Shape Class');
    this._sides = sides;
  }
  
  get sides() {
    return this._sides;
  }
  
  calculatePerimeter(sideLength) {
    return this._sides * sideLength;
  }
}
  `;

  circleClass = `
class Triangle extends Shape {

  constructor(sides) {
    super(sides);
    console.log('Circle Class');
  }
}

const triangle = new Triangle(3);
console.log(triangle.sides);
  `;

  constructor() { }

  ngOnInit() {
  }

}
