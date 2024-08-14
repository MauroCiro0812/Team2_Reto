import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1P2Component } from './s1-p2.component';

describe('S1P2Component', () => {
  let component: S1P2Component;
  let fixture: ComponentFixture<S1P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S1P2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S1P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
