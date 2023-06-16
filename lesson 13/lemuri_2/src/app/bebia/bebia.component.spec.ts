import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebiaComponent } from './bebia.component';

describe('BebiaComponent', () => {
  let component: BebiaComponent;
  let fixture: ComponentFixture<BebiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebiaComponent]
    });
    fixture = TestBed.createComponent(BebiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
