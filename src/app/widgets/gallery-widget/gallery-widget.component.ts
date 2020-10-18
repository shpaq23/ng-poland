import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-widget',
  templateUrl: './gallery-widget.component.html',
  styleUrls: ['./gallery-widget.component.scss']
})
export class GalleryWidgetComponent implements OnInit {

  @HostBinding('class.widget') widgetClass = true;

  readonly name = 'Gallery Widget';

  constructor() { }

  ngOnInit(): void {
  }

}
