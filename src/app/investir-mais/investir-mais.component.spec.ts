import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestirMaisComponent } from './investir-mais.component';

describe('InvestirMaisComponent', () => {
  let component: InvestirMaisComponent;
  let fixture: ComponentFixture<InvestirMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestirMaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestirMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
