import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfItemComponent } from './prof-item-component';

describe('ProfItemComponent', () => {
  let component: ProfItemComponent;
  let fixture: ComponentFixture<ProfItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
