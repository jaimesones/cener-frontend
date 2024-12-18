import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenerCComponent } from './cener-c.component';

describe('CenerCComponent', () => {
  let component: CenerCComponent;
  let fixture: ComponentFixture<CenerCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenerCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenerCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
