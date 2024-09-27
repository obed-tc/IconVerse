import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconItemComponent } from './icon-item.component';

describe('IconItemComponent', () => {
  let component: IconItemComponent;
  let fixture: ComponentFixture<IconItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconItemComponent]
    });
    fixture = TestBed.createComponent(IconItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
