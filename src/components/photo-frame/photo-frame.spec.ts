import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFrame } from './photo-frame';

describe('PhotoFrame', () => {
  let component: PhotoFrame;
  let fixture: ComponentFixture<PhotoFrame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrame],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
