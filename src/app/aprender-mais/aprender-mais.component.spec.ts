import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenderMaisComponent } from './aprender-mais.component';

describe('AprenderMaisComponent', () => {
  let component: AprenderMaisComponent;
  let fixture: ComponentFixture<AprenderMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprenderMaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprenderMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
