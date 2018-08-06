import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFeatureComponent } from './route-feature.component';

describe('RouteFeatureComponent', () => {
  let component: RouteFeatureComponent;
  let fixture: ComponentFixture<RouteFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
