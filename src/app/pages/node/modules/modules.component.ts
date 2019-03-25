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

  lodashInstall = `
    cd ~ && mkdir lodash && cd ./lodash
    npm init
    npm install lodash --save
  `;

  noteFile = `
    cd ~
    mkdir notes-node && cd notes-node
  `;

  constructor() { }

  ngOnInit() {
  }

}
