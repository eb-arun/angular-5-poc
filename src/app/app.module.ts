import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouteFeatureComponent } from './route-feature/route-feature.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { AboutComponent } from './about/about.component';

export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'route-events', component: RouteFeatureComponent },
  { path: 'http-client', component: HttpClientComponent },
  { path: 'about', component: AboutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    RouteFeatureComponent,
    HomeComponent,
    HttpClientComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
