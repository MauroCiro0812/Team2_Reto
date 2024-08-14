import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S5P1Component } from './s5-p1.component';

describe('S5P1Component', () => {
  let component: S5P1Component;
  let fixture: ComponentFixture<S5P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S5P1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S5P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
