import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgValidationComponent } from './ng-validation.component';

describe('NgValidationComponent', () => {
  let component: NgValidationComponent;
  let fixture: ComponentFixture<NgValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
