import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenerBComponent } from './cener-b.component';

describe('CenerBComponent', () => {
  let component: CenerBComponent;
  let fixture: ComponentFixture<CenerBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenerBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
