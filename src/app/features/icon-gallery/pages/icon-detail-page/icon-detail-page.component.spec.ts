import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDetailPageComponent } from './icon-detail-page.component';

describe('IconDetailPageComponent', () => {
  let component: IconDetailPageComponent;
  let fixture: ComponentFixture<IconDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconDetailPageComponent]
    });
    fixture = TestBed.createComponent(IconDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
