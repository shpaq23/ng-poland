import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-widget',
  templateUrl: './clock-widget.component.html',
  styleUrls: ['./clock-widget.component.scss']
})
export class ClockWidgetComponent implements OnInit, OnDestroy {

  @HostBinding('class.widget') widgetClass = true;

  readonly name = 'Clock Widget';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('onDestroy: ', name);
  }

}
