import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { CounterComponent } from './CounterComponent';

const containerElementName = 'counterReactComponentContainer';

@Component({
  selector: 'app-counter-component',
  template: `<span #${containerElementName}></span>`,
  styleUrls: ['./CounterComponent.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactComponentWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild(containerElementName, {static: true}) containerRef: ElementRef;

  @Input() public counter = 10;
  @Output() public componentClick = new EventEmitter<void>();

  constructor() {
    this.handleDivClicked = this.handleDivClicked.bind(this);
  }

  public handleDivClicked() {
    if (this.componentClick) {
      this.componentClick.emit();
      this.render();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    const {counter} = this;

    ReactDOM.render(<div className={'i-am-classy'}>
      <CounterComponent counter={counter} onClick={this.handleDivClicked}/>
    </div>, this.containerRef.nativeElement);
  }
}
