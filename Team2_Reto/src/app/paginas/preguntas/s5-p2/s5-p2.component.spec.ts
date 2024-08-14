import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S5P2Component } from './s5-p2.component';

describe('S5P2Component', () => {
  let component: S5P2Component;
  let fixture: ComponentFixture<S5P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S5P2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S5P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
