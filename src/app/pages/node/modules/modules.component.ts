import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  lodashSource = `
const _ = require('lodash');
_.toUpper('---Hello-world---');
`;

  constructor() { }

  ngOnInit() {
  }

}
