import { ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';

@Injectable(
  { providedIn: 'root' }
)
export class WidgetsService {

  constructor(private readonly injector: Injector,
              private readonly resolver: ComponentFactoryResolver) {
  }

  getAvailableWidgets(): Array<() => Promise<ComponentRef<any>>> {
    return [
      this.getClockWidget.bind(this),
      this.getGalleryWidget.bind(this),
      this.getWeatherWidget.bind(this)
    ];

  }

  getClockWidget(): Promise<ComponentRef<any>> {
    return import('./clock-widget/clock-widget.component')
      .then(({ ClockWidgetComponent }) => {
        return this.resolver.resolveComponentFactory(ClockWidgetComponent).create(this.injector);
      });
  }

  getGalleryWidget(): Promise<ComponentRef<any>> {
    return import('./gallery-widget/gallery-widget.component')
      .then(({ GalleryWidgetComponent }) => {
        return this.resolver.resolveComponentFactory(GalleryWidgetComponent).create(this.injector);
      });
  }

  getWeatherWidget(): Promise<ComponentRef<any>> {
    return import('./weather-widget/weather-widget.component')
      .then(({ WeatherWidgetComponent }) => {
        return this.resolver.resolveComponentFactory(WeatherWidgetComponent).create(this.injector);
      });
  }


}
