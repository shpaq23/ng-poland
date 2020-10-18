import {ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type} from '@angular/core';
import { AsyncCallable } from '../../types';
import type { ClockWidgetComponent } from './clock-widget/clock-widget.component';
import type { GalleryWidgetComponent } from './gallery-widget/gallery-widget.component';
import type { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@Injectable({ providedIn: 'root' })
export class WidgetsService {
  constructor(
    private readonly injector: Injector,
    private readonly resolver: ComponentFactoryResolver
  ) {}

  getAvailableWidgets(): [
    clockWidget: AsyncCallable<ComponentRef<ClockWidgetComponent>>,
    galleryWidget: AsyncCallable<ComponentRef<GalleryWidgetComponent>>,
    weatherWidget: AsyncCallable<ComponentRef<WeatherWidgetComponent>>
  ] {
    return [
      () => this.getClockWidget(),
      () => this.getGalleryWidget(),
      () => this.getWeatherWidget()
    ];
  }

  private getClockWidget(): Promise<ComponentRef<ClockWidgetComponent>> {
    return import('./clock-widget/clock-widget.component').then((m) => {
      return this.createComponent<ClockWidgetComponent>(m.ClockWidgetComponent);
    });
  }

  private getGalleryWidget(): Promise<ComponentRef<GalleryWidgetComponent>> {
    return import('./gallery-widget/gallery-widget.component').then((m) => {
      return this.createComponent<GalleryWidgetComponent>(m.GalleryWidgetComponent);
    });
  }

  private getWeatherWidget(): Promise<ComponentRef<WeatherWidgetComponent>> {
    return import('./weather-widget/weather-widget.component').then((m) => {
      return this.createComponent<WeatherWidgetComponent>(m.WeatherWidgetComponent);
    });
  }

  private createComponent<T>(component: Type<T>): ComponentRef<T> {
    return this.resolver
      .resolveComponentFactory<T>(component)
      .create(this.injector);
  }
}
