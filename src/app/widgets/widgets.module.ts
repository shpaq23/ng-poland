import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockWidgetComponent } from './clock-widget/clock-widget.component';
import { GalleryWidgetComponent } from './gallery-widget/gallery-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';



@NgModule({
  declarations: [
    ClockWidgetComponent,
    GalleryWidgetComponent,
    WeatherWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WidgetsModule { }
