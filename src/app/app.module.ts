import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetPresenterComponent } from './widget-presenter/widget-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
