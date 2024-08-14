import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3P2Component } from './s3-p2.component';

describe('S3P2Component', () => {
  let component: S3P2Component;
  let fixture: ComponentFixture<S3P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S3P2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S3P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
