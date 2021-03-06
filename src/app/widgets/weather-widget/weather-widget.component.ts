import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  @HostBinding('class.widget') widgetClass = true;

  readonly name = 'Weather Widget';

  constructor() { }

  ngOnInit(): void {
  }

}
