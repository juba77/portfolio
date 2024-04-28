import { Component, OnInit } from '@angular/core';
declare var feather: any;

@Component({
  selector: 'app-root',
  template: `
    <app-header/>
    <app-lateral/>
    <app-about/>
    <app-job/>
    <app-education/>
    <app-skills/>
    <app-footer/>
  `,
  styles: []
})

export class AppComponent implements OnInit {
  ngOnInit() {
    feather.replace();
  }
  title = 'portfolio';
}
