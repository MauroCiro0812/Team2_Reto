import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S6P1Component } from './s6-p1.component';

describe('S6P1Component', () => {
  let component: S6P1Component;
  let fixture: ComponentFixture<S6P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S6P1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S6P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
