import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingomponent } from './landing.component';

describe('Landingomponent', () => {
  let component: Landingomponent;
  let fixture: ComponentFixture<Landingomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Landingomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Landingomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
