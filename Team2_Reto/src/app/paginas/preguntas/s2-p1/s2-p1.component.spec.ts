import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2P1Component } from './s2-p1.component';

describe('S2P1Component', () => {
  let component: S2P1Component;
  let fixture: ComponentFixture<S2P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S2P1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S2P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
