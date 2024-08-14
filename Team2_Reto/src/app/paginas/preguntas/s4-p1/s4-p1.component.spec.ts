import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S4P1Component } from './s4-p1.component';

describe('S4P1Component', () => {
  let component: S4P1Component;
  let fixture: ComponentFixture<S4P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S4P1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S4P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
