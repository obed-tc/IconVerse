import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListComponent } from './icon-list.component';

describe('IconListComponent', () => {
  let component: IconListComponent;
  let fixture: ComponentFixture<IconListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconListComponent]
    });
    fixture = TestBed.createComponent(IconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
