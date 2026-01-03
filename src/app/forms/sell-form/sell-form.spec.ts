import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellForm } from './sell-form';

describe('SellForm', () => {
  let component: SellForm;
  let fixture: ComponentFixture<SellForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
