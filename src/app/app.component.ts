import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-poland';

  ngOnInit(): void {
  }

  createDynamicComponent(): void {
    console.log('create dynamic component');
  }
}
