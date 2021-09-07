import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

  @Input() text: string;
  @Input() backgroundColor?: string;
  @Input() disabled: boolean;

  @Output() onClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onClicked.emit('button cliked');
  }

  onCancel() {
    alert('Cancel event!');
  }

}
