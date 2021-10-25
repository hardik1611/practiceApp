import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObservalbleComponent } from './custom-observalble.component';

describe('CustomObservalbleComponent', () => {
  let component: CustomObservalbleComponent;
  let fixture: ComponentFixture<CustomObservalbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomObservalbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomObservalbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
