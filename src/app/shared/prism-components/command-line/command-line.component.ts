import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrls: ['./command-line.component.scss']
})
export class CommandLineComponent {

  @Input() user = 'Beto';
  @Input() dataLine = '';
  @Input() source = '';

  constructor() { }

}
