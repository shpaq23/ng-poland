import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetsService } from 'src/app/widgets/widgets.service';

@Component({
  selector: 'app-widget-presenter',
  templateUrl: './widget-presenter.component.html',
  styleUrls: ['./widget-presenter.component.scss']
})
export class WidgetPresenterComponent implements OnInit {

  selectedWidget: ComponentRef<any>;
  currentSelectedWidgetIndex = 0;
  previousBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  selectedWidgetName: string;

  @ViewChild('widgetOutlet', { read: ViewContainerRef })
  private widgetOutlet: ViewContainerRef;

  private readonly availableWidgets: Array<() => Promise<ComponentRef<any>>>;

  constructor(private readonly widgetsService: WidgetsService) {
    this.availableWidgets = this.widgetsService.getAvailableWidgets();
  }

  ngOnInit(): void {
    this.renderWidget();
    this.checkButtons();
  }

  nextWidget(): void {
    this.currentSelectedWidgetIndex++;
    this.renderWidget();
    this.checkButtons();

  }

  previousWidget(): void {
    this.currentSelectedWidgetIndex--;
    this.renderWidget();
    this.checkButtons();
  }

  private renderWidget(): void {
    this.availableWidgets[this.currentSelectedWidgetIndex]().then(componentRef => {
      this.selectedWidget = componentRef;
      this.widgetOutlet.clear();
      this.widgetOutlet.insert(this.selectedWidget.hostView);
    });
  }

  private checkButtons(): void {
    this.nextBtnDisabled = this.currentSelectedWidgetIndex === this.availableWidgets.length - 1;
    this.previousBtnDisabled = this.currentSelectedWidgetIndex === 0;
  }

}
