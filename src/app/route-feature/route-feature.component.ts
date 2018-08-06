import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, GuardsCheckStart, ChildActivationStart, ActivationStart, GuardsCheckEnd, ResolveStart, ResolveEnd, ActivationEnd, ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-route-feature',
  templateUrl: './route-feature.component.html',
  styleUrls: ['./route-feature.component.css']
})
export class RouteFeatureComponent implements OnInit {
  constructor(router: Router) {
    
  }

  ngOnInit() {
  }

}
