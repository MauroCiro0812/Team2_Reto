import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S4P2Component } from './s4-p2.component';

describe('S4P2Component', () => {
  let component: S4P2Component;
  let fixture: ComponentFixture<S4P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S4P2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S4P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
