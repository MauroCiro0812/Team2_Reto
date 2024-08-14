import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1P1Component } from './s1-p1.component';

describe('S1P1Component', () => {
  let component: S1P1Component;
  let fixture: ComponentFixture<S1P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S1P1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S1P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
