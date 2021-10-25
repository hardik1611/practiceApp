import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixExampleComponent } from './matrix-example.component';

describe('MatrixExampleComponent', () => {
  let component: MatrixExampleComponent;
  let fixture: ComponentFixture<MatrixExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
