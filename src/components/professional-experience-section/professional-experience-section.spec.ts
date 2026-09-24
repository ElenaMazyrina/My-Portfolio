import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROFESSIONALEXPERIENCESection } from './professional-experience-section';

describe('PROFESSIONALEXPERIENCESection', () => {
  let component: PROFESSIONALEXPERIENCESection;
  let fixture: ComponentFixture<PROFESSIONALEXPERIENCESection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PROFESSIONALEXPERIENCESection],
    }).compileComponents();

    fixture = TestBed.createComponent(PROFESSIONALEXPERIENCESection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
