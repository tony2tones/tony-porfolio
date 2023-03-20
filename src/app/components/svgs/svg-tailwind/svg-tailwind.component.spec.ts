import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTailwindComponent } from './svg-tailwind.component';

describe('SvgTailwindComponent', () => {
  let component: SvgTailwindComponent;
  let fixture: ComponentFixture<SvgTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgTailwindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
