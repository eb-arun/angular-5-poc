import { Component } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, GuardsCheckStart, ChildActivationStart, ActivationStart, GuardsCheckEnd, ResolveStart, ResolveEnd, ActivationEnd, ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 eventArray:any = [];
  constructor(router: Router) {
    router.events.subscribe(routerEvent => {
      switch (routerEvent.constructor.name) {
        case 'GuardsCheckStart':
          this.eventArray.push(routerEvent.constructor.name);
          break;
        case 'ChildActivationStart':
          this.eventArray.push(routerEvent.constructor.name);
          break;
        case 'ActivationStart':
          this.eventArray.push(routerEvent.constructor.name);
          break;
        case 'GuardsCheckEnd':
          this.eventArray.push(routerEvent.constructor.name);
          break;
        case 'ResolveStart':
          this.eventArray.push(routerEvent.constructor.name);
          break;
        case 'ResolveEnd':
          this.eventArray.push(routerEvent.constructor.name);
          break;
        case 'ActivationEnd':
          this.eventArray.push(routerEvent.constructor.name);
          break;
        case 'ChildActivationEnd':
          this.eventArray.push(routerEvent.constructor.name);
          break;

      } //swith End
    })
  }
  title = 'app';
  clearList() {
    this.eventArray = [];
  }

}
