import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2P2Component } from './s2-p2.component';

describe('S2P2Component', () => {
  let component: S2P2Component;
  let fixture: ComponentFixture<S2P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S2P2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S2P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
