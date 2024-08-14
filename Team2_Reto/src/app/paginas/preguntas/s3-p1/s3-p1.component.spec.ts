import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3P1Component } from './s3-p1.component';

describe('S3P1Component', () => {
  let component: S3P1Component;
  let fixture: ComponentFixture<S3P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S3P1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S3P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
