import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenerAComponent } from './cener-a.component';

describe('CenerAComponent', () => {
  let component: CenerAComponent;
  let fixture: ComponentFixture<CenerAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenerAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
